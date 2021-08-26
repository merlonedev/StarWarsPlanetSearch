import React from 'react';
import PropTypes from 'prop-types';

function SelectNumbersFilters({ testid, options, onChange, name }) {
  return (
    <select
      data-testid={ testid }
      onChange={ onChange }
      name={ name }
    >
      { options.map((value) => (
        <option key={ value } value={ value }>
          { value }

        </option>
      ))}

    </select>
  );
}
export default SelectNumbersFilters;

SelectNumbersFilters.propTypes = {
  testid: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
