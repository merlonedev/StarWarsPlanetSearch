import React, { useContext } from 'react';
import { Context } from '../context/SWProvider';

const SearchInput = () => {
  const { filterPlanetsByName } = useContext(Context);

  return (
    <input
      name="name"
      type="text"
      onChange={ ({ target }) => filterPlanetsByName(target) }
      data-testid="name-filter"
    />
  );
};

export default SearchInput;
