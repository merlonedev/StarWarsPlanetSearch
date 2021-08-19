import React, { useContext } from 'react';
import dataContext from '../context/dataContext';

function SelectedFilters() {
  const { state, setFilterBy, setFilterTags, filterTags } = useContext(dataContext);
  const { filterByNumericValues } = state.filters;

  const removeFilter = (event, filter) => {
    const newArrayOfFilters = filterByNumericValues
      .filter((CurrentFilter) => CurrentFilter.column !== filter.column);

    const newFiltersTag = [...filterTags, filter.column];

    setFilterTags(newFiltersTag);
    setFilterBy(newArrayOfFilters);
  };

  return (
    <div className="selectedFilters">
      {filterByNumericValues.map((filter) => (
        <div data-testid="filter" key={ filter.column }>
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button
            onClick={ (event) => removeFilter(event, filter) }
            type="button"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default SelectedFilters;
