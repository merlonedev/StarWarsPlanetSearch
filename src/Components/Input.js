import React, { useContext } from 'react';
import { Context } from '../context/SWProvider';

function SearchInput() {
  const { filterPlanetsByName } = useContext(Context);
  return (
    <input
      name="name"
      type="text"
      onChange={ ({ target }) => filterPlanetsByName(target) }
      data-testid="name-filter"
    />
  );
}
export default SearchInput;
