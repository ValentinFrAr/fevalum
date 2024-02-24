/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

const Filter = ({ setSearchQuery, searchQuery, setRangeValue, rangeValue }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="filter-content mx-auto">
        <div className="text-center mb-4">
          <input
            type="text"
            className="search-input"
            placeholder='Busca lo que necesitas... "ventana modena, doble vidrio...."'
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
