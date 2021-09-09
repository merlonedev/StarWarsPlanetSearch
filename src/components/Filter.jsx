import React from 'react';
import FilterByName from './FilterByName';
import FilterByColumnAndNumber from './FilterByColumnAndNumber';
import UsedFilters from './UsedFilters';

function Filter() {
  return (
    <div>
      <h1>Filter Device</h1>

      <FilterByName />
      <FilterByColumnAndNumber />
      <UsedFilters />
    </div>
  );
}

export default Filter;
