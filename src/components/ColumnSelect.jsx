import React from 'react';
import PropTypes from 'prop-types';

export default function ColumnSelect({ change, value, options }) {
  return (
    <label htmlFor="column-filter">
      Coluna
      <select
        onChange={ change }
        name="column"
        id="column-filter"
        data-testid="column-filter"
        value={ value }
      >
        {options.map((option) => (
          <option key={ option }>{option}</option>
        ))}
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>
    </label>
  );
}

ColumnSelect.propTypes = {
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
