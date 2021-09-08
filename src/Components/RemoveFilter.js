import React, { useContext } from 'react';
import MyContext from '../Context/Context';

function FilterRemove() {
  const {
    filters: { filterByNumericValues },
    setFilters,
    filters,
  } = useContext(MyContext);

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
}

export default FilterRemove;
