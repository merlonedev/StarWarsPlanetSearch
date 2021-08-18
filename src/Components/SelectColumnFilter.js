import React from 'react';
import PropTypes from 'prop-types';

export default function SelectColumnFilter({ updateFilter }) {
  return (
    <label htmlFor="column-filter">
      Selecione uma coluna de valores
      <select name="column" data-testid="column-filter" onChange={ updateFilter }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </label>
  );
}

SelectColumnFilter.propTypes = {
  updateFilter: PropTypes.func,
}.isRequired;
