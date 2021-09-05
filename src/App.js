import React from 'react';
import Table from './Components/Table';
import PlanetsProvider from './Context/Provider';
import Form from './Components/Form';
import RemoveFilters from './Components/RemoveFilters';

function App() {
  return (
    <PlanetsProvider>
      <Form />
      <Table />
      <RemoveFilters />
    </PlanetsProvider>
  );
}

export default App;
