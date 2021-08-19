import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputType, placeholder, value, onChange, name, testId }) => (
  <input
    type={ inputType }
    placeholder={ placeholder }
    value={ value }
    onChange={ onChange }
    name={ name }
    data-testid={ testId }
  />
);

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Input;
