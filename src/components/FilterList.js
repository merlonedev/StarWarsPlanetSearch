import React from 'react';

function FilterList(props) {
  const { filters } = props;
  return (
    <ul>
      { filters.filterByNumericValues.length === 0 ? ''
        : Object.values(filters.filterByNumericValues).map((filter, index) => (
          <li key={ index }>
            {filter.column}
            {filter.comparison}
            {filter.value}
            <button
              type="button"
              data-testid="filter"
            >
              x
            </button>
          </li>
        ))}
    </ul>
  );
}

export default FilterList;
