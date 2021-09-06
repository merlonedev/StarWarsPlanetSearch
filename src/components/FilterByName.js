import React, { useContext } from 'react';

import { FiltersContext } from '../context';

function FilterByName() {
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
          onChange={ ({ target }) => filterByName.setNameFilter({ name: target.value }) }
        />
      </label>
    </form>
  );
}

export default FilterByName;
