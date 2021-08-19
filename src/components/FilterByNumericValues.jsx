import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumericValues() {
  const { inputNumeric, setInputNumeric } = useContext(PlanetContext);

  const [stateLocal, setStateLocal] = useState();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setStateLocal({
      ...stateLocal,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { column = 'population', comparison = 'maior_que', value = 0 } = stateLocal;
    setInputNumeric({
      ...inputNumeric,
      column,
      comparison,
      value,
    });
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="input-numbers">
          Pesquisar Planeta por Números:
          <select
            name="column"
            data-testid="column-filter"
            onChange={ handleChange }
          >
            <option selected value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>

          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ handleChange }
          >
            <option selected value="maior_que">maior que</option>
            <option value="menor_que">menor que</option>
            <option value="igual_a">igual a</option>
          </select>

          <input
            type="number"
            name="value"
            // id="input-numbers"
            data-testid="value-filter"
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleSubmit }
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FilterByNumericValues;
