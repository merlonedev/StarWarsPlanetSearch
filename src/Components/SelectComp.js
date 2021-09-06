import React from 'react';
import PropTypes from 'prop-types';
import DynamicSelect from './DynamicSelect';

function SelectComp({ onChange }) {
  const selectOptions = [
    { name: 'maior que', value: 'maior que' },
    { name: 'menor que', value: 'menor que' },
    { name: 'igual a', value: 'igual a' },
  ];

  return (
    <DynamicSelect
      options={ selectOptions }
      onChange={ onChange }
      dataTestid="comparison-filter"
      selectName="comparison"
    />
  );
}

SelectComp.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectComp;
