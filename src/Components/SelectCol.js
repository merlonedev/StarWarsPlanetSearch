import React from 'react';
import PropTypes from 'prop-types';
import DynamicSelect from './DynamicSelect';

function SelectCol({ options, onChange }) {
  return (
    <DynamicSelect
      options={ options }
      onChange={ onChange }
      dataTestid="column-filter"
      selectName="column"
    />
  );
}

SelectCol.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default SelectCol;
