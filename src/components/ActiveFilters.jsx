import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ActiveFilters() {
  const { filters: { filterByNumericValues }, removeFilter } = useContext(AppContext);
  return (
    <>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={ `active-filter-${column}` }>
          <span>{ column }</span>
          <span>{ comparison }</span>
          <span>{ value }</span>
          <button onClick={ () => removeFilter(column) } type="button">
            Remover
          </button>
        </div>
      ))}
    </>
  );
}

export default ActiveFilters;
