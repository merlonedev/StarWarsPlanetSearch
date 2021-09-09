import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import ColumnFilter from './components/ColumnFilter';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <ColumnFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
