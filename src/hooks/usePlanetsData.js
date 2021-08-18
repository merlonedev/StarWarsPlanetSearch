import { useContext, useEffect } from 'react';
import Context from '../context/Context';

function usePlanetsData() {
  const { setPlanets } = useContext(Context);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const { results } = await response.json();
      setPlanets(results);
    };

    getPlanets();
  }, [setPlanets]);
}

export default usePlanetsData;
