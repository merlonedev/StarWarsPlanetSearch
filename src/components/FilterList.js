import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import DeleteFilterBtn from './DeleteFilterBtn';

function FilterList() {
  const { filters: { filterByNumericValues } } = useContext(StarContext);

  if (filterByNumericValues.length) {
    return (
      <ol>
        {filterByNumericValues.map((filter, i) => (
          <li data-testid="filter" key={ i }>
            {JSON.stringify(filter)}
            <DeleteFilterBtn filter={ filter } />
          </li>
        ))}
      </ol>
    );
  }
  return null;
}

export default FilterList;
