import React, { useContext } from 'react';
import Context from '../context/Context';

function Form() {
  const { planetName, handleName, filterByNumericValues,
    handleFilter, handleClick } = useContext(Context);

  return (
    <form>
      <label htmlFor="name-filter">
        Nome:
        <input
          id="name-filter"
          name="name-filter"
          type="text"
          value={ planetName }
          data-testid="name-filter"
          onChange={ handleName }
        />
      </label>
      <label htmlFor="column-filter">
        Filtro de coluna:
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          value={ filterByNumericValues.column }
          onChange={ handleFilter }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Filtro de Comparação:
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ filterByNumericValues.comparison }
          onChange={ handleFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="value-filter">
          Filtro de valor:
          <input
            id="value-filter"
            name="value"
            type="number"
            data-testid="value-filter"
            value={ filterByNumericValues.value }
            onChange={ handleFilter }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Acionar Filtro
        </button>
      </label>
    </form>
  );
}

export default Form;
