import { useState } from 'react';
import usePagination from '../hooks/usePagination';

function PaginationDemo() {
  const [items] = useState(
    Array.from({ length: 100 }, (_, i) => 'Item ' + (i + 1))
  );

  const [itemsPerPage, setItemsPerPage] = useState(10);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(items.length, itemsPerPage);

  const currentItems = items.slice(startIndex, endIndex + 1);

  return (
    <div>
      <h2>Pagination Demo</h2>
      <label htmlFor='itemsPerPage'>Items per page</label>
      <select
        id='itemsPerPage'
        value={itemsPerPage}
        onChange={e => setItemsPerPage(parseInt(e.target.value))}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>

      <div>Total Items: {items.length}</div>

      <div>
        <div>Current Items:</div>
        <div>
          {items.length === 0 && <div>No items available.</div>}
          {currentItems.map(item => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>

      <button onClick={prevPage} disabled={!canPrevPage}>
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>

      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            disabled={pageNum === currentPage}
          >
            {pageNum}
          </button>
        ))}
      </div>

      <div>
        <div>Items Per Page: {itemsPerPage}</div>
        <div>Start Index: {startIndex}</div>
        <div>End Index: {endIndex}</div>
        <div>Items on Current Page: {itemsOnCurrentPage}</div>
      </div>
    </div>
  );
}

export default PaginationDemo;
