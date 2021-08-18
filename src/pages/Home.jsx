import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';
import Table from '../components/Table';

const Home = () => {
  const { data } = useContext(PlanetsContext);

  return (
    <Table data={ data } />
  );
};

export default Home;
