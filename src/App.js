import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Filters from './components/Filters/Filters';
import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
