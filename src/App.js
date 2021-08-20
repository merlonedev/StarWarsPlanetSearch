import React from 'react';
import PlanetsProvider from './context/Provider';
import Table from './components/Table';
import FilterForms from './components/FilterForms';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <FilterForms />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
