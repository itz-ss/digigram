// src/utils/deriveFilterOptions.js

/**
 * deriveFilterOptions(products)
 *
 * Auto-detects usable filter fields from product JSON.
 *
 * Output:
 * {
 *   brand: { type: "categorical", values: [...] },
 *   rating: { type: "numeric", min: 1, max: 5 },
 *   features: { type: "categorical", values: ["Bluetooth", "Noise Canceling", ...] }
 * }
 *
 * Notes:
 * - Skips category (handled separately)
 * - Skips non-filter fields (id, image, link, description, etc.)
 * - Automatically detects numeric vs categorical
 */

export const deriveFilterOptions = (products = []) => {
  const skipFields = new Set([
    "id",
    "name",
    "image",
    "gallery",
    "affiliateLink",
    "description",
    "category",
    "price",
    "mrp",
    "discount"
  ]);

  const map = {};

  products.forEach((p) => {
    if (!p || typeof p !== "object") return;

    Object.entries(p).forEach(([key, value]) => {
      if (skipFields.has(key)) return;
      if (value === undefined || value === null) return;

      // Skip objects (like specs objects - not suitable for filters)
      if (typeof value === "object" && !Array.isArray(value)) return;

      if (!map[key]) {
        map[key] = {
          samples: [],
          numericCandidates: 0,
          total: 0,
          valuesSet: new Set()
        };
      }

      const entry = map[key];
      entry.total++;

      // Flatten arrays
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== undefined && item !== null) {
            entry.samples.push(item);
            entry.valuesSet.add(String(item));
            if (!isNaN(Number(item))) entry.numericCandidates++;
          }
        });
      } else {
        entry.samples.push(value);
        entry.valuesSet.add(String(value));
        if (!isNaN(Number(value))) entry.numericCandidates++;
      }
    });
  });

  const result = {};

  Object.entries(map).forEach(([key, meta]) => {
    const cleanValues = Array.from(meta.valuesSet).filter(
      (v) => v !== "" && v !== "undefined" && v !== "null"
    );

    if (cleanValues.length === 0) return;

    // numeric vs categorical detection
    const numericRatio = meta.numericCandidates / Math.max(1, meta.samples.length);

    if (numericRatio > 0.6) {
      // numeric filter
      const nums = meta.samples
        .map((n) => Number(n))
        .filter((n) => !Number.isNaN(n));

      if (nums.length < 2) return;

      const min = Math.min(...nums);
      const max = Math.max(...nums);

      result[key] = {
        type: "numeric",
        min: Number.isFinite(min) ? min : 0,
        max: Number.isFinite(max) ? max : 0
      };
    } else {
      // categorical filter
      result[key] = {
        type: "categorical",
        values: cleanValues.sort()
      };
    }
  });

  return result;
};
