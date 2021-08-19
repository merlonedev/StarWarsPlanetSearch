import React from 'react';
import FilterByName from './FilterComponents/FilterByName';
import FilterByNumber from './FilterComponents/FIlterByNumber';

const HeadingFilters = () => (
  <header>
    <h2>Filter of Planets</h2>
    <FilterByName />
    <FilterByNumber />
  </header>
);

export default HeadingFilters;
