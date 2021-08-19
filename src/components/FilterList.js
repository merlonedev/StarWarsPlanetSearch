import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import ResetBtn from './ResetBtn';

function FilterList() {
  const { filters: { filterByNumericValues } } = useContext(StarContext);

  if (filterByNumericValues.length) {
    return (
      <ol>
        {filterByNumericValues.map((filter, i) => (
          <li key={ i }>
            {JSON.stringify(filter)}
            <ResetBtn filter={ filter } />
          </li>
        ))}
      </ol>
    );
  }
  return null;
}

export default FilterList;
