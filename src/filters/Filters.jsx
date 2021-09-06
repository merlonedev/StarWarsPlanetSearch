import React from 'react';
import OrderFilter from '../components/OrderFilter';
import NameFilter from './NameFilter';
import NumberFilter from './NumberFilter';

function Filters() {
  return (
    <session className="filter-box">
      <NameFilter />
      <NumberFilter />
      <OrderFilter />
    </session>
  );
}

export default Filters;
