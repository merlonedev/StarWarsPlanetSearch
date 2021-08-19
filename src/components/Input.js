import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    type,
    testid,
    value,
    onChange,
    className,
    name,
  } = props;

  return (
    <input
      type={ type }
      data-testid={ testid }
      className={ className }
      value={ value }
      onChange={ onChange }
      name={ name }
    />
  );
}

Input.defaultProps = {
  type: 'text',
  testid: '',
  className: '',
  name: '',
};

Input.propTypes = {
  type: PropTypes.string,
  testid: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
