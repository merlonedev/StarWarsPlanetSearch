import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
