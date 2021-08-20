import React from 'react';
import SelectOrderFilter from './FilterSortControlled/SelectOrderFilter';
import RadiosOrderFilter from './FilterSortControlled/RadiosOrderFilter';
import ButtonOrderFilter from './FilterSortControlled/ButtonOrderFilter';

function FilterSort() {
  return (
    <>
      <RadiosOrderFilter />
      <SelectOrderFilter />
      <ButtonOrderFilter />
    </>
  );
}

export default FilterSort;
