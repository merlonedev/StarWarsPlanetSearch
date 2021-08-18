import React from 'react';
import Table from '../components/Table';
import PlanetsProvider from '../context/PlanetsProvider';
import SearchName from '../components/SearchName';

function Home() {
  return (
    <PlanetsProvider>
      <SearchName />
      <Table />
    </PlanetsProvider>
  );
}

export default Home;
