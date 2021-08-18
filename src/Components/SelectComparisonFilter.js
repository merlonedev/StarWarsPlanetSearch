import React from 'react';
import PropTypes from 'prop-types';

export default function SelectComparisonFilter({ updateFilter }) {
  return (
    <label htmlFor="column-filter">
      Selecione a comparação desejada
      <select name="comparison" data-testid="comparison-filter" onChange={ updateFilter }>
        <option value=">">maior que</option>
        <option value="<">menor que</option>
        <option value="===">igual a</option>
      </select>
    </label>
  );
}

SelectComparisonFilter.propTypes = {
  updateFilter: PropTypes.func,
}.isRequired;
