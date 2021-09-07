import React from 'react';
import NumericValuesFilter from './NumericValuesFilter';
import NameFilter from './NameFilter';
import UsedFiltersDisplay from './UsedFiltersDisplay';
import './Filters.css';

function Filters() {
  return (
    <div>
      <NameFilter />
      <NumericValuesFilter />
      <UsedFiltersDisplay />
    </div>
  );
}

export default Filters;
