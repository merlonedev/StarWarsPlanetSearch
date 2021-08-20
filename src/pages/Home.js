import React from 'react';
import Table from '../components/Table';
import PlanetsProvider from '../context/PlanetsProvider';
import NameSearch from '../components/NameSearch';
import NumberFilter from '../components/NumberFilter';

function Home() {
  return (
    <PlanetsProvider>
      <NameSearch />
      <NumberFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default Home;
