import React from 'react';
import { func, arrayOf, string } from 'prop-types';

const Select = ({ options, testId, placeholder, value, onChange, name }) => (
  <label htmlFor={ testId }>
    <select
      data-testid={ testId }
      name={ name }
      placeholder={ placeholder }
      value={ value }
      onChange={ onChange }
      id={ testId }
    >
      {options.map((option) => <option value={ option } key={ option }>{option}</option>)}
    </select>
  </label>
);

Select.propTypes = {
  testId: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
  options: arrayOf.isRequired,
};

export default Select;
