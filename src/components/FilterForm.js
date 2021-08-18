import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function FilterForm() {
  const { filters, setFilters } = useContext(StarContext);

  function handleChange({ target }) {
    setFilters({ ...filters, filterByName: target.value });
  }

  return (
    <form action="">
      <label htmlFor="name-input">
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          id="name-input"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default FilterForm;
