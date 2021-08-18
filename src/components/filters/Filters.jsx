import React from 'react';
import Sort from '../Sort';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';

export default function Filters() {
  return (
    <div className="filters-div">
      <div className="filters">
        <NameFilter />
        <NumericFilter />
        <Sort />
      </div>
    </div>
  );
}
