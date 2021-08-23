import React from 'react';
import Table from './Table/Table';
import SearchInput from './SearchInput/SearchInput';
import NumericFilters from './NumericFilter/NumericFilters';
import FiltersInUse from './NumericFilter/FiltersInUse';

const SearchScreen = () => (
  <div>
    <div>
      <SearchInput />
    </div>
    <div>
      <NumericFilters />
    </div>
    <div>
      <FiltersInUse />
    </div>
    <div>
      <Table />
    </div>
  </div>
);

export default SearchScreen;
