import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const FiltersByNumericValue = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const handleRemoveFilter = (filter) => {
    const newComparisonFilter = filterByNumericValues
      .filter(({ column }) => column !== filter.column);
    setFilters({
      ...filters,
      filterByNumericValues: newComparisonFilter,
    });
  };

  return (
    <ul>
      { filterByNumericValues.map((filter) => (
        <li key={ filter.column } data-testid="filter">
          <p>{ JSON.stringify(filter) }</p>
          <button
            type="button"
            onClick={ () => handleRemoveFilter(filter) }
          >
            X
          </button>
        </li>
      )) }
    </ul>
  );
};

export default FiltersByNumericValue;
