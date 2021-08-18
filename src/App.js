import React from 'react';
import Filters from './components/Filters';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <Filters />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
