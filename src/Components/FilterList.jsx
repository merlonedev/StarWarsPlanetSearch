import React from 'react';
import FilterByName from './FilterByName';
import FilterByTag from './FilterByTag';

function FilterList() {
  return (
    <div className="filterList">
      <FilterByName />
      <FilterByTag />
    </div>
  );
}

export default FilterList;
