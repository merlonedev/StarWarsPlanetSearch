import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function NumberFilter() {
  const { setFilterByNumericValues, filterByNumericValues } = useContext(StarContext);

  return (
    <form>
      <label htmlFor="column-filter" className="filters">
        Select attribute:
        <select
          className="filters"
          data-testid="column-filter"
          id="column-filter"
          name="column"
          onChange={
            ({ target: { value } }) => setFilterByNumericValues({ column: value })
          }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter" className="filters">
        <select
          className="filters"
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparison-filter"
          onChange={
            ({ target: { value } }) => setFilterByNumericValues({
              ...filterByNumericValues, comparison: value,
            })
          }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          id="value-filter"
          name="value-filter"
          onChange={
            ({ target: { value } }) => setFilterByNumericValues({
              ...filterByNumericValues, value,
            })
          }
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => {} }
      >
        <span className="material-icons-outlined">
          filter_alt
        </span>
      </button>
    </form>
  );
}

export default NumberFilter;
