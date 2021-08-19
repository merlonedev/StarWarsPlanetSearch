import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

const initialFilterState = {
  column: 'population',
  comparation: 'iqual a',
  value: 0,
};

function InputNumber() {
  const [filter, setFilter] = useState(initialFilterState);
  const { filterNumber } = useContext(StarContext);

  function handleChange({ target }) {
    const { id, value } = target;
    setFilter({
      ...filter,
      [id]: value,
    });
  }

  function handleClick() {
    filterNumber(filter);
  }

  return (
    <form>
      <label htmlFor="column">
        <select id="column" data-testid="column-filter" onChange={ handleChange }>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparation">
        <select
          id="comparation"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="igual a">igual a</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          id="value"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default InputNumber;
