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
        { options }
      </select>
    </label>
  );
}

const { string, func, arrayOf } = PropTypes;
Select.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  testID: string,
  onChange: func.isRequired,
  options: arrayOf(string).isRequired,
};

Select.defaultProps = {
  testID: '',
};

export default Select;
