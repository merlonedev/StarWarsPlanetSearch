import React from 'react';
import Table from './components/Table';
import './App.css';
import MyProvider from './context/Provider';
import FilterPlanets from './components/FilterPlanets,';

function App() {
  return (
    <MyProvider>
      <FilterPlanets />
      <Table />
    </MyProvider>
  );
}

export default App;
