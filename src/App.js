import React from 'react';
import PlanetsProvider from './context/Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
