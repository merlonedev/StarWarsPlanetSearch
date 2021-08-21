import React from 'react';
import Input from './Input';
import Select from './Select';

function SearchBar() {
  return (
    <div>
      <Input testID="name-filter" />
      <Select testID="column-filter" />
      <Select testID="comparison-filter" />
      <Input testID="value-filter" />
    </div>
  );
}

export default SearchBar;
