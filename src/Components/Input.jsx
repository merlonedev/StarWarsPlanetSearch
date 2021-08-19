import React from 'react';
import PropTypes from 'prop-types';

function Input({ labelText, type, name, id, dataTestid, value, func }) {
  return (
    <label htmlFor={ id }>
      { labelText }
      <input
        id={ id }
        type={ type }
        name={ name }
        data-testid={ dataTestid }
        value={ value }
        onChange={ func }
      />
    </label>
  );
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Input;
