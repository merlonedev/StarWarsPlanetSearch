import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, handleChange, type } = { type: 'text' }) {
  return (
    <label htmlFor={ id }>
      {`${id.toUpperCase()}: `}
      <input
        type={ type }
        id={ id }
        data-testid={ `${id}-filter` }
        onChange={ ({ target: { value } }) => handleChange(value, id) }
      />
    </label>
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
