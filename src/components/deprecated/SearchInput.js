import React, { useContext } from 'react';

import Context from '../context/Context';

function SearchInput() {
  const {
    filters: { filterByNumericValues },
    filterByValue,
  } = useContext(Context);
  const optCond = (value) => filterByNumericValues
    .some((filter) => filter.column === value);
  return (
    <form
      onSubmit={ (event) => {
        event.preventDefault();
        filterByValue({
          column: event.target.elements.column.value,
          comparison: event.target.elements.comparison.value,
          value: event.target.elements.valueFilter.value,
        });
      } }
    >
      <label htmlFor="column">
        Filtrar por Coluna
        <select name="column" id="column" data-testid="column-filter">
          { !optCond('population') && <option>population</option> }
          { !optCond('orbital_period') && <option>orbital_period</option> }
          {!optCond('diameter') && <option>diameter</option>}
          {!optCond('rotation_period') && <option>rotation_period</option>}
          {!optCond('surface_water') && <option>surface_water</option>}
        </select>
      </label>
      <label htmlFor="comparison">
        <select name="comparison" id="comparison" data-testid="comparison-filter">
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="===">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          name="valueFilter"
          id="valueFilter"
        />
      </label>
      <button type="submit" data-testid="button-filter"> Filtrar </button>
    </form>
  );
}

export default SearchInput;
