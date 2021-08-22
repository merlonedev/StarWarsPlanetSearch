import React from 'react';
import NameFilter from './NameFilter';
import NumberFilter from './NumberFilter';

function Filters() {
  return (
    <session className="filter-box">
      <NameFilter />
      <NumberFilter />
    </session>
  );
}

export default Filters;
