import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectFilters() {
  const {
    filterByNumeric, handleNumericChanges, handleClickNumeric,
  } = useContext(Context);

  function handleClick() {
    handleClickNumeric(filterByNumeric);
  }

  return (
    <div>
      <select
        id="column-filter"
        data-testid="column-filter"
        name="column"
        onChange={ handleNumericChanges }
        value={ filterByNumeric.column }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparison"
        onChange={ handleNumericChanges }
        value={ filterByNumeric.comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        id="value-filter"
        data-testid="value-filter"
        name="value"
        onChange={ handleNumericChanges }
        value={ filterByNumeric.value }
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filter
      </button>
    </div>
  );
}

export default SelectFilters;
