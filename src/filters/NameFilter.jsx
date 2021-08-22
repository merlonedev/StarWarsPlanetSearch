import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function NameFilter() {
  const { setFilterByName } = useContext(StarContext);

  return (
    <div className="filters">
      <label htmlFor="search-name">
        Search Name:
        <input
          id="search-name"
          data-testid="name-filter"
          name="name"
          onChange={ ({ target: { value } }) => setFilterByName(value) }
        />
      </label>
    </div>
  );
}

export default NameFilter;
