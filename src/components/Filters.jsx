import React, { useContext } from 'react';

import Context from '../context/Context';

function Filters() {
  const { updateFilters } = useContext(Context);

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          data-testid="name-filter"
          id="name"
          type="text"
          onChange={ ({ target }) => updateFilters(target.value) }
        />
      </label>
    </form>
  );
}

export default Filters;
