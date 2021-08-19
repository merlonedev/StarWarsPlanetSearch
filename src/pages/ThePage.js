import React from 'react';
import Provider from '../ContextStuff/Provider';
import Table from '../Components/Table';
import InputNameFilter from '../Components/InputNameFilter';
import FilterByNumbers from '../Components/FilterByNumbers';
import DisplayFilters from '../Components/DisplayFilters';

export default function ThePage() {
  return (
    <Provider>
      <InputNameFilter />
      <FilterByNumbers />
      <DisplayFilters />
      <Table />
    </Provider>
  );
}
