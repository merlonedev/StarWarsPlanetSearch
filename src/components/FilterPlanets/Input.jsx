import React from 'react';
import PropTypes from 'prop-types';

function Input(
  {
    id,
    value,
    onChange,
    placeholder,
    text,
    className,
    name,
  },
) {
  return (
    <label htmlFor={ id }>
      { text }
      <input
        id={ id }
        data-testid={ id }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
        className={ className }
        name={ name }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  text: '',
  className: '',
};

export default Input;
