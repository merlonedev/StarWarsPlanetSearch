import React from 'react';
import './App.css';
import Table from './components/table/Table';
import PlanetsInfo from './context/usePlanetsInfo';

function App() {
  return (
    <PlanetsInfo>
      <main>
        <Table />
      </main>
    </PlanetsInfo>
  );
}

export default App;
