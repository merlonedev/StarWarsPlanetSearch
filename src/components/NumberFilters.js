import React from 'react';
import SelectFilterProperties from './NumberFiltersControlled/SelectFilterProperties';
import SelectFilterComparation from './NumberFiltersControlled/SelectFilterComparation';
import InputFilterValue from './NumberFiltersControlled/InputFilterValue';
import ButtonFilter from './NumberFiltersControlled/ButtonFilter';
import ButtonResetFilters from './NumberFiltersControlled/ButtonResetFilters';

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
