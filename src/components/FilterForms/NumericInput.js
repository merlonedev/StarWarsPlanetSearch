import React, { useContext, useState } from 'react';
import StarContext from '../../context/StarContext';

function NumericInput() {
  const { filters, setFilters } = useContext(StarContext);
  const [formState, setFormState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  function handleChange({ target }) {
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
  }

  function handleClick() {
    setFilters({ ...filters,
      filterByNumericValues: {
        ...formState,
      } });

    setColumns(columns.filter((c) => c !== formState.column));
  }

  return (
    <>
      <label htmlFor="column-input">
        column:
        <select
          data-testid="column-filter"
          name="column"
          id="column-input"
          value={ formState.column }
          onChange={ handleChange }
        >
          {columns.map((c) => (
            <option key={ c } value={ c }>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="column-input">
        comparison:
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ formState.comparison }
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
          value={ formState.value }
          name="value"
          id="value-input"
          onChange={ handleChange }
        />
      </label>

      <button data-testid="button-filter" type="button" onClick={ handleClick }>
        Filtrar
      </button>
    </>
  );
}

export default NumericInput;
