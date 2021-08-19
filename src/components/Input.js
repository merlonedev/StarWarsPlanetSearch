import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputType, placeholder, value, onChange, name, id, testId }) => (
  <input
    type={ inputType }
    placeholder={ placeholder }
    value={ value }
    onChange={ onChange }
    name={ name }
    id={ id }
    data-testid={ testId }
  />
);

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  testId: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  id: '',
};

export default Input;
