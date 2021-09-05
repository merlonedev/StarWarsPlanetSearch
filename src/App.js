import React from 'react';
import './App.css';
import Table from './components/Table';
import DataProvider from './context/DataProvider';
import FilterInput from './components/FilterInput';

function App() {
  return (
    <DataProvider>
      <FilterInput />
      <Table />
    </DataProvider>
  );
}

export default App;
