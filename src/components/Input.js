import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, name, onChange }) {
  return (
    <label htmlFor={ id }>
      { name }
      <input
        id={ id }
        onChange={ onChange }
      />
    </label>
  );
}

const { string, func } = PropTypes;
Input.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
};

export default Input;
