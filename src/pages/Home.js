import React, { useContext } from 'react';
import { ContextProvider } from '../Components/StarWarsContext';
import Table from '../Components/Table';

const Home = () => {
  const { planets } = useContext(ContextProvider);

  return (
    <Table planets={ planets } />
  );
};

export default Home;
