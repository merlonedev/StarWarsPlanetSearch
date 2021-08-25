import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, name, onChange, testID }) {
  return (
    <label htmlFor={ id }>
      { name }
      <input
        id={ id }
        type="text"
        data-testid={ testID }
        onChange={ onChange }
      />
    </label>
  );
}

const { string, func } = PropTypes;
Input.propTypes = {
  id: string.isRequired,
  name: string,
  testID: string,
  onChange: func.isRequired,
};

Input.defaultProps = {
  testID: '',
  name: '',
};

export default Input;
