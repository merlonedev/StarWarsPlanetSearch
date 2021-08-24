import React from 'react';
import { string, func } from 'prop-types';

const Input = ({ placeholder, type, onChange, value, testId, name }) => (
  <label htmlFor="name-filter">
    <input
      id={ testId }
      data-testid={ testId }
      type={ type }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange }
      name={ name }
    />

  </label>
);

Input.propTypes = {
  placeholder: string,
  type: string,
  onChange: func.isRequired,
  value: string.isRequired,
  testId: string.isRequired,
  name: string.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
