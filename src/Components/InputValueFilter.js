import React from 'react';
import PropTypes from 'prop-types';

export default function InputValueFilter({ updateFilter }) {
  return (
    <label htmlFor="value-filter">
      Filtrar pelo nome
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ updateFilter }
      />
    </label>
  );
}

InputValueFilter.propTypes = {
  updateFilter: PropTypes.func,
}.isRequired;
