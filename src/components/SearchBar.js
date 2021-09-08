import React, { useContext } from 'react';

import Context from '../context/Context';

function SearchBar() {
  const {
    filters,
    wasFiltered,
    filterByName,
    submitFilters } = useContext(Context);
  return (
    <>
      <form
        onSubmit={ (event) => {
          event.preventDefault();
          return submitFilters();
        } }
      >
        <label htmlFor="filterByName">
          Filtrar por nome
          <input
            name="filterByName"
            id="filterByName"
            data-testid="name-filter"
            onChange={ filterByName }
            required
          />
        </label>
      </form>
      <div>
        {wasFiltered ? <p>{ JSON.stringify(filters) }</p> : ''}
      </div>
    </>
  );
}

export default SearchBar;
