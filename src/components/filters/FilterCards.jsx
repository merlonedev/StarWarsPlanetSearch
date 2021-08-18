import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function FilterCards() {
  const { filters: { filterByNumericValues } } = useContext(AppContext);

  const columns = {
    'maior que': '>',
    'menor que': '<',
    'igual a': '=',
  };
  return (
    <div className="filter-cards">
      {filterByNumericValues.map(({ column, comparison, value }, i) => (
        <div
          key={ `filter-${i}` }
          className="filter-card"
          data-testid="filter"
        >
          <p>
            {column}
            {' '}
            {columns[comparison]}
            {' '}
            {value}
          </p>
          <button type="button">X</button>
        </div>
      ))}
    </div>
  );
}

export default FilterCards;
