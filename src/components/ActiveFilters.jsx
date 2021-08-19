import React, { useContext } from 'react';
import { MyContext } from '../context/Provider';

const ActiveFilters = () => {
  const { filters, removeFilter } = useContext(MyContext);
  if (filters.filterByNumericValues.length === 0) {
    return (null);
  }
  return (
    <section>
      {filters.filterByNumericValues.map((e) => (
        <p data-testid="filter" key={ e.column }>
          {e.column}
          {' '}
          {e.comparison}
          {' '}
          {e.valueNumber}
          <button onClick={ () => removeFilter(e.column) } type="button">X</button>
        </p>
      ))}
    </section>
  );
};

export default ActiveFilters;
