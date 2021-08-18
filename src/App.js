import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
