import React from 'react';
import PropTypes from 'prop-types';

function Select({ testID, options, onChange, name }) {
  return (
    <select data-testid={ testID } onChange={ onChange } name={ name }>
      {options.map((value) => (
        <option key={ value } value={ value }>{ value }</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  testID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
