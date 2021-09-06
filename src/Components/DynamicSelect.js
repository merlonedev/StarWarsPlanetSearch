import React from 'react';
import PropTypes from 'prop-types';

function DynamicSelect({ options, dataTestid, selectName, onChange }) {
  return (
    <select
      data-testid={ dataTestid }
      onChange={ onChange }
      name={ selectName }
    >
      {options.map(({ name, value }) => (
        <option value={ value } key={ value }>
          { name }
        </option>
      ))}
    </select>
  );
}

DynamicSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  dataTestid: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DynamicSelect;
