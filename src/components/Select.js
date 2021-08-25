import React from 'react';
import PropTypes from 'prop-types';

function Select({ id, name, onChange, testID, options }) {
  return (
    <label htmlFor={ id }>
      { name }
      <select
        id={ id }
        data-testid={ testID }
        onChange={ onChange }
      >
        { options.map((option) => (
          <option value={ option } key={ options.indexOf(option) }>
            { option }
          </option>
        )) }
      </select>
    </label>
  );
}

const { string, func, arrayOf } = PropTypes;
Select.propTypes = {
  id: string.isRequired,
  name: string,
  testID: string,
  onChange: func.isRequired,
  options: arrayOf(string).isRequired,
};

Select.defaultProps = {
  testID: '',
  name: '',
};

export default Select;
