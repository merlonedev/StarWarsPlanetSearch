import React from 'react';
import PropTypes from 'prop-types';

export default function ComparisonSelect({ change, value }) {
  return (
    <label htmlFor="comparison-filter">
      Maior/Menor/Igual
      <select
        name="comparison"
        id="comparison-filter"
        data-testid="comparison-filter"
        value={ value }
        onChange={ change }
      >
        <option value=""> </option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </label>
  );
}

ComparisonSelect.propTypes = {
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
