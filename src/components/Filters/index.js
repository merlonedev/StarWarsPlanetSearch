import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';
import OrderData from './OrderData';
import './style.css';

const Filters = () => (
  <div className="page-filters">
    <h2>Filters</h2>
    <FilterByName />
    <OrderData />
    <FilterByNumericValues />
  </div>
);

export default Filters;
