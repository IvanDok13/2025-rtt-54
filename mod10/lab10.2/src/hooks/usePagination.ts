// Objective: Create a hook to manage pagination logic for a list of items.

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { UsePaginationResult } from '../interfaces';

// Function Inputs:
// totalItems: The total number of items to be paginated.
// itemsPerPage: The number of items to display per page (default to 10).
// initialPage: The page to start on (default to 1).
function usePagination(
  totalItems: number,
  itemsPerPage: number = 10,
  initialPage: number = 1
): UsePaginationResult {
  const [currentPage, setCurrentPage] = useState(initialPage);
  // Implementation Details:
  // Calculate totalPages correctly
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Ensure currentPage does not go below 1 or above totalPages.

  useEffect(() => {
    setCurrentPage(prev => {
      if (prev < 1) return 1;
      if (prev > totalPages) return totalPages;
      return prev;
    });
  }, [totalPages]);

  // startIndex and endIndex should be calculated based on the currentPage and itemsPerPage.
  // itemsOnCurrentPage should correctly reflect the count for the last page if it’s not full.

  const { startIndex, endIndex, itemsOnCurrentPage } = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage - 1, totalItems - 1);
    const count = totalItems === 0 ? 0 : Math.max(0, end - start + 1);

    return {
      startIndex: start,
      endIndex: end,
      itemsOnCurrentPage: count,
    };
  }, [currentPage, itemsPerPage, totalItems]);

  const setPage = useCallback(
    (page: number) => {
      setCurrentPage(() => Math.min(Math.max(1, page), totalPages));
    },
    [totalPages]
  );

  const nextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }, []);

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage: currentPage < totalPages,
    canPrevPage: currentPage > 1,
  };
}

export default usePagination;
