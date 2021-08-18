import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ActiveFiltersList() {
  const { filters,
    filters: { filterByNumericValues },
    setFilters } = useContext(AppContext);

  const deleteFilter = (index) => {
    console.log(index);
    const filtered = filterByNumericValues.splice(index, 1);
    console.log(filtered);
    setFilters({
      ...filters,
      filterByNumericValues: filtered,
    });
  };
  return (
    <ul>
      {
        filterByNumericValues.map((filter, index) => (
          <li key={ index }>
            {`${filter.column} ${filter.comparison} ${filter.value} `}
            <button
              type="button"
              data-testid="filter"
              onClick={ () => deleteFilter(index) }
            >
              X
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default ActiveFiltersList;
