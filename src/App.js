import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import Table from './components/Table';
import InputSearch from './components/InputSearch';
import FilterNumeric from './components/FilterNumeric';
import SortTable from './components/SortTable';

function App() {
  return (
    <AppProvider>
      <InputSearch />
      <FilterNumeric />
      <SortTable />
      <Table />
    </AppProvider>
  );
}

export default App;
