/**
 * formatPrice(num, options)
 * Safe price formatter for Indian currency values.
 *
 * Examples:
 * formatPrice(12999) -> "₹12,999"
 * formatPrice(12999, { compact: true }) -> "₹12.9K"
 * formatPrice("79999.50") -> "₹79,999.50"
 */

export const formatPrice = (num, options = {}) => {
  const { compact = false, decimals = 0, symbol = "₹" } = options;

  if (num == null || num === "" || isNaN(Number(num))) return "-";

  const value = Number(num);

  // Compact format (₹65K, ₹1.2L, ₹2.5Cr)
  if (compact) {
    if (value >= 1_00_00_000) {
      return `${symbol}${(value / 1_00_00_000).toFixed(1)}Cr`;
    }
    if (value >= 1_00_000) {
      return `${symbol}${(value / 1_00_000).toFixed(1)}L`;
    }
    if (value >= 1_000) {
      return `${symbol}${(value / 1_000).toFixed(1)}K`;
    }
  }

  // Standard Indian currency formatting
  return (
    symbol +
    value.toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
};
