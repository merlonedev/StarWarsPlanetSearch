import React from 'react';
import Table from './Components/Table';
import PlanetsProvider from './Context/Provider';
import Form from './Components/Form';

function App() {
  return (
    <PlanetsProvider>
      <Form />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
