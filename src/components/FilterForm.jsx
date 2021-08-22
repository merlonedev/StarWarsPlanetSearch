import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';

function FilterForm() {
  return (
    <div>
      <h1>Filters</h1>
      <NameFilter />
      <NumericFilter />
    </div>
  );
}

export default FilterForm;
