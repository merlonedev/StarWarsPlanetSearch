import React, { useContext } from 'react';
import StarContext from '../../context/StarContext';

function NameInput() {
  const { filters, setFilters } = useContext(StarContext);

  function handleChange({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
  }

  return (
    <label htmlFor="name-input">
      Filtrar por Nome
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        id="name-input"
        onChange={ handleChange }
      />
    </label>
  );
}

export default NameInput;
