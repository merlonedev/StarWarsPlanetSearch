import React from 'react';
import './App.css';
import Table from './components/Table';
import DataProvider from './context/DataProvider';
import FilterPlanets from './components/FilterPlanets';

function App() {
  return (
    <DataProvider>
      <FilterPlanets />
      <Table />
    </DataProvider>
  );
}

export default App;
