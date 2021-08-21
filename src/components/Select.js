import PropTypes from 'prop-types';
import React from 'react';

function Select({ id, handleChange, children }) {
  return (
    <label htmlFor={ id }>
      {`${id.toUpperCase()}: `}
      <select
        id={ id }
        data-testid={ `${id}-filter` }
        onChange={ ({ target: { value } }) => handleChange(value, id) }
      >
        {children}
      </select>
    </label>
  );
}

Select.propTypes = {
  children: PropTypes.arrayOf().isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Select;
