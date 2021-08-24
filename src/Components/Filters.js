import React from 'react';
import NumericValuesFilter from './NumericValuesFilter';
import NameFilter from './NameFilter';
import './Filters.css';

function Filters() {
  return (
    <div>
      <NameFilter />
      <NumericValuesFilter />
    </div>
  );
}

export default Filters;
