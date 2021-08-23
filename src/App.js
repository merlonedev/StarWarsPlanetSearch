import React from 'react';
import './App.css';
import Filter from './components/table/Filter';
import Table from './components/table/Table';
import PlanetsInfo from './context/usePlanetsInfo';

function App() {
  return (
    <PlanetsInfo>
      <main>
        <Filter />
        <Table />
      </main>
    </PlanetsInfo>
  );
}

export default App;
