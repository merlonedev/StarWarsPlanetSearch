import React from 'react';
import FilterByName from './FilterByName';
import FilterByColumnAndNumber from './FilterByColumnAndNumber';

function Filter() {
  return (
    <div>
      <h1>Filter Device</h1>

      <FilterByName />
      <FilterByColumnAndNumber />
    </div>
  );
}

export default Filter;
