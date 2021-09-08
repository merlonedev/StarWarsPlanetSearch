import React, { useEffect, useContext } from 'react';
import ContainerForm from './ContainerForm';
import Table from './Table';

import MyContext from '../context/MyContext';
import InputFilterPlanets from './InputFilterPlanets';
import planetsByFilters from '../utils/planetsByFilters';

function Home() {
  const { planets, filters, setFilteredPlanets } = useContext(MyContext);
  useEffect(() => {
    setFilteredPlanets(planetsByFilters({ planets, filters }));
  }, [filters, planets, setFilteredPlanets]);

  return (
    <>
      <InputFilterPlanets />
      <ContainerForm />
      <Table />
    </>
  );
}

export default Home;
