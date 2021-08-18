import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const comparisonConverter = {
  'maior que': '>',
  'menor que': '<',
  'igual a': '=',
};

function FilterCards() {
  const {
    filters, setFilters, setOptions, options,
  } = useContext(AppContext);

  const { filterByNumericValues } = filters;

  const handleDelete = (index, col) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((fil, i) => i !== index),
      ],
    });
    setOptions([...options, col]);
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
            {comparisonConverter[comparison]}
            {' '}
            {value}
          </p>
          <button
            type="button"
            onClick={ () => handleDelete(i, column) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterCards;
