import React from 'react';
import FilterByName from './FilterByName';
import FilterByColumnAndNumber from './FilterByColumnAndNumber';
import UsedFilters from './UsedFilters';
import Order from './Order';

function Filter() {
  return (
    <div>
      <h1>Filter Device</h1>

      <FilterByName />
      <FilterByColumnAndNumber />
      <UsedFilters />
      <Order />
    </div>
  );
}

export default Filter;
