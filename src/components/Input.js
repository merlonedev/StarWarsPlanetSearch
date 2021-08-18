import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputType, placeholder, value, onChange, testId }) => (
  <input
    type={ inputType }
    placeholder={ placeholder }
    value={ value }
    onChange={ onChange }
    data-testid={ testId }
  />
);

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Input;
