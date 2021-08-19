import React from 'react';
import PropTypes from 'prop-types';

export default function SaveFilterButton({ onClick }) {
  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ onClick }
    >
      Filtrar
    </button>
  );
}

SaveFilterButton.propTypes = {
  onClick: PropTypes.func,
}.isRequired;
