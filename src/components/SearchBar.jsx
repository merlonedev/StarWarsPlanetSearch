import React, { useContext } from 'react';
import MyContext from '../providers/MyContext';

function SearchBar() {
  const { setFilters } = useContext(MyContext);
  return (
    <label htmlFor="search">
      Busca
      <input
        id="search"
        data-testid="name-filter"
        onChange={ ({ target }) => setFilters({
          filterByName: {
            name: target.value,
          },
        }) }
      />
    </label>
  );
}

export default SearchBar;
