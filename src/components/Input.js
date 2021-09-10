import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  inputType, placeholder, value, onChange, name, id, checked, labelText, testId,
}) => (
  <div>
    <label htmlFor={ id }>
      { labelText }
    </label>
    <input
      type={ inputType }
      placeholder={ placeholder }
      value={ value }
      onChange={ onChange }
      name={ name }
      id={ id }
      checked={ checked }
      data-testid={ testId }
    />
  </div>
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
  checked: PropTypes.bool,
  labelText: PropTypes.string,
  testId: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  id: '',
  checked: false,
  labelText: '',
};

export default Input;
