import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterList = () => {
  const { filters: { filterByNumericValues },
    removeFilter } = useContext(StarWarsContext);
  return (
    <div>
      { filterByNumericValues.map((filter, index) => (
        <div data-testid="filter" key={ index }>
          <pre>{ JSON.stringify(filter) }</pre>
          <button type="button" onClick={ () => removeFilter(index) }>X</button>
        </div>
      )) }
    </div>
  );
};

export default FilterList;
