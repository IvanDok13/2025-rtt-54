export interface UsePaginationResult {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  itemsOnCurrentPage: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  canNextPage: boolean;
  canPrevPage: boolean;
}
