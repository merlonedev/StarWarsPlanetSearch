import React from 'react';
import PropTypes from 'prop-types';

export default function ValueFilter({ change, value }) {
  return (
    <label htmlFor="value-filter">
      Valor
      <input
        id="value-filter"
        value={ value }
        onChange={ change }
        type="number"
        data-testid="value-filter"
        name="value"
      />
    </label>
  );
}

ValueFilter.propTypes = {
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
