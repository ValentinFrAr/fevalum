import React from "react";
import { photosData } from "../photos/photos";

const Pagination = ({ currentPage, handlePageClick }) => {
  const totalPages = Math.ceil(photosData.length / 50); // Assurez-vous d'ajuster en fonction de votre logique de pagination

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage - 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            key={i + 1}
          >
            <button
              className="page-link"
              onClick={() => handlePageClick(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage + 1)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
