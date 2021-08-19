import React, { useContext } from 'react';
import StarContext from '../../context/StarContext';

function NameInput() {
  const { filters, setFilters } = useContext(StarContext);

  function handleChange({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
  }

  return (
    <div className="mb-3">
      <label htmlFor="name-input" className="form-label">
        Filtrar por Nome
        <input
          data-testid="name-filter"
          className="form-control"
          type="text"
          name="name"
          id="name-input"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default NameInput;
