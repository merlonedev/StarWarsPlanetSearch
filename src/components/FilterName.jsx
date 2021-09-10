import React, { useContext } from 'react';

import { FiltersContext } from '../context';

function FilterName() {
  const { filters } = useContext(FiltersContext);
  const { filterByName } = filters;
  return (
    <form>
      <label htmlFor="name">
        Name:
        <input
          data-testid="name-filter"
          id="name"
          type="text"
          value={ filterByName.name }
          onChange={ ({ target }) => filterByName.setName(target.value) }
        />
      </label>
    </form>
  );
}

export default FilterName;
