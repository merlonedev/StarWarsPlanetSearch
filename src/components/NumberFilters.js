import React from 'react';
import SelectFilterProperties from './SelectFilterProperties';
import SelectFilterComparation from './SelectFilterComparation';
import InputFilterValue from './InputFilterValue';
import ButtonFilter from './ButtonFilter';
import ButtonResetFilters from './ButtonResetFilters';

function NumberFilters() {
  return (
    <>
      <SelectFilterProperties />
      <SelectFilterComparation />
      <InputFilterValue />
      <ButtonFilter />
      <ButtonResetFilters />
    </>
  );
}

export default NumberFilters;
