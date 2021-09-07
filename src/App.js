import React from 'react';
import './App.css';
import Table from './components/Table';
import DataProvider from './context/DataProvider';
import FilterInput from './components/FilterInput';
import FilterSort from './components/FilterSort';

function App() {
  return (
    <DataProvider>
      <FilterInput />
      <FilterSort />
      <Table />
    </DataProvider>
  );
}

export default App;
