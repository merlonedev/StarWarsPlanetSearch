import React from 'react';
import FilterNameInput from './FilterName';
import NumericFilters from './NumericFilters';

function Header() {
  return (
    <>
      <FilterNameInput />
      <NumericFilters />
    </>
  );
}

export default Header;
