import React from 'react';
import PropTypes from 'prop-types';

function Select({ id, options }) {
  return (
    <select
      id={ id }
      data-testid={ id }
    >
      { options.map((option, i) => (
        <option key={ i }>
          { option }
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
