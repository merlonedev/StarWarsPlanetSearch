import React from 'react';
import Table from '../components/Table';
import PlanetsProvider from '../context/PlanetsProvider';

function Home() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default Home;
