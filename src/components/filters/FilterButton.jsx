import React from 'react';
import PropTypes from 'prop-types';

export default function FilterButton({ click }) {
  return (
    <button data-testid="button-filter" type="button" onClick={ click }>
      Filtrar
    </button>
  );
}

FilterButton.propTypes = {
  click: PropTypes.func.isRequired,
};
