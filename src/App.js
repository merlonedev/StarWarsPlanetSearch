import React from 'react';
import { StarWarsProvider } from './contexts/StarWarsContext';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import ColumnFilter from './components/ColumnFilter';
import FilterList from './components/FIltersList';
import OrderByColumn from './components/OrderByColumn';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <ColumnFilter />
      <OrderByColumn />
      <FilterList />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
