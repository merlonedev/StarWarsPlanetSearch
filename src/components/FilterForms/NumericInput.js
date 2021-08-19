import React, { useContext, useState } from 'react';
import StarContext from '../../context/StarContext';

function NumericInput() {
  const { filters, setFilters } = useContext(StarContext);
  const [formState, setFormState] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  function handleChange({ target }) {
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
  }

  function handleClick() {
    setFilters({ ...filters,
      filterByNumericValues: {
        ...formState,
      } });
  }

  return (
    <>
      <label htmlFor="column-input">
        column:
        <select
          data-testid="column-filter"
          name="column"
          id="column-input"
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="column-input">
        comparison:
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison-input"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-input">
        value:
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          id="value-input"
          onChange={ handleChange }
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}

export default NumericInput;
