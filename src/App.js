import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import ColumnFilter from './components/ColumnFilter';
import FilterList from './components/FIltersList';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <ColumnFilter />
      <FilterList />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
