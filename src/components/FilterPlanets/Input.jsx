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
    type,
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
        type={ type }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  text: '',
  className: '',
  type: 'text',
  placeholder: '',
};

export default Input;
