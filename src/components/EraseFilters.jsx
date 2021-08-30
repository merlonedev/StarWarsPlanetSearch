import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function EraseFilters() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    filterUsed,
    setFilterUsed,
  } = useContext(StarContext);

  const newArrayFilters = filterByNumericValues;

  return (
    <ul>
      { newArrayFilters.map((filt) => (
        <li data-testid="filter" key={ filt.column }>
          {filt.column}
          {' '}
          {filt.comparison}
          {' '}
          {filt.value}
          <button
            type="button"
            onClick={ () => {
              setFilterUsed([filterUsed, filt.column]);
              setFilterByNumericValues(
                filterByNumericValues.filter((num) => (num.column !== filt.column)),
              );
            } }
          >
            x
          </button>
        </li>

      ))}
    </ul>
  );
}

export default EraseFilters;
