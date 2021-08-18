import React, { useContext, useState } from 'react';

import Context from '../context/Context';

function Filters() {
  const { updateFilters } = useContext(Context);

  const initialState = {
    column: 'population',
    comparison: 'maior que',
    value: '',
  };
  const [state, setState] = useState(initialState);

  const handleChange = (target) => {
    const { name, value } = target;

    const newState = {
      ...state,
      [name]: value,
    };
    setState(newState);
  };

  const { column, comparison, value } = state;

  return (
    <div>
      <label htmlFor="name">
        Name
        <input
          data-testid="name-filter"
          id="name"
          type="text"
          onChange={ ({ target }) => updateFilters('name', target.value) }
        />
      </label>

      <form
        onSubmit={ (event) => {
          event.preventDefault();
          updateFilters('numericValue', state);
        } }
      >
        <label htmlFor="column">
          Coluna
          <select
            data-testid="column-filter"
            id="column"
            name="column"
            required
            value={ column }
            onChange={ ({ target }) => handleChange(target) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>

        <label htmlFor="comparison">
          Comparação
          <select
            data-testid="comparison-filter"
            id="comparison"
            name="comparison"
            required
            value={ comparison }
            onChange={ ({ target }) => handleChange(target) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label htmlFor="value">
          Valor
          <input
            data-testid="value-filter"
            id="value"
            name="value"
            type="number"
            required
            value={ value }
            onChange={ ({ target }) => handleChange(target) }
          />
        </label>

        <button data-testid="button-filter" type="submit">Adicionar Filtro</button>
      </form>
    </div>
  );
}

export default Filters;
