import React from 'react';
import { useGlobalState } from '../Provider';

function FormFilterByName() {
  const { filters, setFilters } = useGlobalState();

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  return (
    <form>
      <label htmlFor="name-filter">
        Search Planet:
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default FormFilterByName;
