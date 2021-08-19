import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, name, value, onChange, testId }) => (
  <select
    value={ value }
    name={ name }
    onChange={ onChange }
    data-testid={ testId }
  >
    { options.map((option) => <option key={ option }>{ option }</option>) }
  </select>
);

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Select;
