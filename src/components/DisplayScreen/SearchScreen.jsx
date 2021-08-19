import React from 'react';
import Table from './Table/Table';
import SearchInput from './SearchInput/SearchInput';
import NumericFilter from './NumericFilter/NumericFilter';

const SearchScreen = () => (
  <div>
    <div>
      <SearchInput />
    </div>
    <div>
      <NumericFilter />
    </div>
    <div>
      <Table />
    </div>
  </div>
);

export default SearchScreen;
