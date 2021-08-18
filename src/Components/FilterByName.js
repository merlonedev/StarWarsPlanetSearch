import React, { useContext } from 'react';

import { FiltersContext } from '../context';
// import PropTypes from 'prop-types';

function FilterByName(/* props */) {
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

// FilterByName.propTypes = {

// };

export default FilterByName;
