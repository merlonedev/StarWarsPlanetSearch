import React from 'react';
import PropTypes from 'prop-types';

function Select({ id, labelText, options, onChange }) {
  return (
    <label htmlFor={ id }>
      {labelText}
      <select data-testid={ id } id={ id } onChange={ onChange }>
        {
          options.map((option) => <option key={ option }>{option}</option>)
        }
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
