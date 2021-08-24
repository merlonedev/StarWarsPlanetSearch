import React from 'react';
import './App.css';
import Table from './Components/Table';
import Filter from './Components/Filter';
import PlanetsProvider from './Context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Filter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
