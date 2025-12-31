// src/utils/paginate.js

/**
 * paginateArray(arr, page, pageSize)
 *
 * Returns:
 * {
 *   pageCount: number,
 *   items: [],
 *   page: number,
 *   hasPrev: boolean,
 *   hasNext: boolean
 * }
 */

export const paginateArray = (arr = [], page = 1, pageSize = 12) => {
  // Ensure valid array
  const list = Array.isArray(arr) ? arr : [];

  // Ensure valid pageSize
  const size = Number(pageSize) > 0 ? Number(pageSize) : 12;

  const total = list.length;

  // No items → return empty pagination safely
  if (total === 0) {
    return {
      pageCount: 0,
      items: [],
      page: 1,
      hasPrev: false,
      hasNext: false
    };
  }

  // Calculate number of pages
  const pageCount = Math.ceil(total / size);

  // Clamp page number between 1 and pageCount
  const current = Math.min(Math.max(Number(page) || 1, 1), pageCount);

  // Determine slice range
  const start = (current - 1) * size;
  const items = list.slice(start, start + size);

  return {
    pageCount,
    items,
    page: current,
    hasPrev: current > 1,
    hasNext: current < pageCount
  };
};
