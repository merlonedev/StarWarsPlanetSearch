import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, labelName, type, onChange, value }) {
  return (
    <div>
      <label htmlFor={ id }>
        {labelName}
        <input
          data-testid={ id }
          type={ type }
          onChange={ onChange }
          value={ value }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
