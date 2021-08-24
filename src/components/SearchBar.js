import React from 'react';
import Input from './Input';
import Select from './Select';

function SearchBar() {
  return (
    <>
      <Input testID="name-filter" />
      <Select testID="column-filter" />
      <Select testID="comparison-filter" />
      <Input testID="value-filter" />
    </>
  );
}

export default SearchBar;
