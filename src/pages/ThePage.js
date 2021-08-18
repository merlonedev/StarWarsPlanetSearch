import React from 'react';
import Provider from '../ContextStuff/Provider';
import Table from '../Components/Table';
import InputNameFilter from '../Components/InputNameFilter';
import FilterByNumbers from '../Components/FilterByNumbers';

export default function ThePage() {
  return (
    <Provider>
      <InputNameFilter />
      <FilterByNumbers />
      <Table />
    </Provider>
  );
}
