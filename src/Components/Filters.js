import React, { useContext } from 'react';
import { FiltersContext } from '../context';
import FilterByValue from './FilterByValue';
import FilterByColumn from './FilterByColumn';
import FilterByName from './FilterByName';
import FilterByComparison from './FilterByComparison';
import Filter from './Filter';

function Filters() {
  const { filters } = useContext(FiltersContext);
  const { filterByNumericValues } = filters;

  return (
    <div>
      <FilterByColumn />
      <FilterByComparison />
      <FilterByValue />
      <FilterByName />
      {filterByNumericValues.length > 0 && filterByNumericValues
        .map((filter, index) => <Filter filter={ filter } key={ index } />)}
    </div>
  );
}

export default Filters;
