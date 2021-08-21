import React, { useContext, useState } from 'react';
import Context from '../context/Context';

const INITIAL_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

function SelectFilter() {
  const { filters, setFilters } = useContext(Context);
  const { filterByNumericValues } = filters;

  const [numericFilter, setNumericFilter] = useState({ ...INITIAL_STATE });
  const { column, comparison, value } = numericFilter;

  // const { planets } = useContext(Context);
  // console.log(planets[0]);

  function handleChange({ target }) {
    setNumericFilter({
      ...numericFilter,
      [target.name]: target.value,
    });
  }

  function handleClickFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        numericFilter,
      ],
    });
    // setNumericFilter({ ...INITIAL_STATE });
  }

  return (
    <div>
      {/* { console.log(planets[0]) } */}
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          value={ column }
          id="column"
          name="column"
          onChange={ handleChange }

        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter'">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison">
        <select
          data-testid="comparison-filter"
          value={ comparison }
          id="comparison"
          name="comparison"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        <input
          data-testid="value-filter"
          value={ value }
          id="value"
          name="value"
          type="number"
          // placeholder="0"
          onChange={ handleChange }
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClickFilter }
      >
        Add filter
      </button>
    </div>
  );
}

export default SelectFilter;
