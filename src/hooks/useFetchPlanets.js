import { useState, useEffect } from 'react';
import fetchPlanetsApi from '../services/planetsApi';

function useFetchPlanets() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanetsApi();
      planets.forEach((planet) => {
        delete planet.residents;
      });
      setData(planets);
      setIsFetching(false);
    };
    if (isMounted) getPlanets();
    setIsMounted(true);
  }, [isMounted]);

  return [data, isFetching];
}

export default useFetchPlanets;
