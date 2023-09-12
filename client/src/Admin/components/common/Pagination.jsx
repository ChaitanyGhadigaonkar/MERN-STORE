import React, { useState } from 'react';

const Pagination = ({ totalPages, pageNo, setPageNo }) => {

  const handlePreviousClick = () => {
    setPageNo((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setPageNo((prev) => prev + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={handlePreviousClick}
        disabled={pageNo === 1}
        className={`px-4 py-2 rounded-lg ${pageNo === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
        Previous
      </button>
      <span className="text-base font-medium">
        Page {pageNo} of {totalPages}
      </span>
      <button
        onClick={handleNextClick}
        disabled={pageNo === totalPages}
        className={`px-4 py-2 rounded-lg ${pageNo === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

