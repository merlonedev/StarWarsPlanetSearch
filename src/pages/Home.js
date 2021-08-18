import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import Filters from '../components/Filters';
import fetchApi from '../helpers/fetchApi';
import context from '../context';

function Home() {
  const { setPlanets } = useContext(context);
  useEffect(() => {
    const getPlanets = async () => {
      const result = await fetchApi();
      setPlanets(result);
    };
    getPlanets();
  }, [setPlanets]);
  return (
    <main>
      <Filters />
      <Table />
    </main>
  );
}

export default Home;
