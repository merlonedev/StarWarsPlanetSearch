import React, { useEffect, useContext } from 'react';
import Table from '../Components/Table';
import Search from '../Components/Search';
import PlanetsContext from '../Context/PlanetsContext';

function Home() {
  const { handleSetState } = useContext(PlanetsContext);

  useEffect(() => {
    const getPlanets = async () => {
      // em caso de ban usar o endpoint: 'https://swapi.dev/api/planets/'
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint).then((response) => response.json());
      handleSetState('data', [...result.results]);
    };
    getPlanets();
  }, []);

  return (
    <div>
      <Search />
      <Table />
    </div>
  );
}

export default Home;
