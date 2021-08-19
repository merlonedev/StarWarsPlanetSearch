import { useState, useEffect } from 'react';
import fetchPlanetsApi from '../services/planetsApi';

function useFetchPlanets() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const getPlanets = () => {
    const fetchApi = async () => {
      setIsMounted(true);
      if (!isMounted) {
        const planets = await fetchPlanetsApi();
        planets.forEach((planet) => {
          delete planet.residents;
        });
        setData(planets);
        setIsFetching(false);
      }
    };
    fetchApi();
  };

  useEffect(getPlanets);

  return [data, isFetching];
}

export default useFetchPlanets;
