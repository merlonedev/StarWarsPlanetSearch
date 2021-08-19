import { useState, useEffect } from 'react';

export default function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getSystems = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await response.json();
      const { results } = json;
      results.forEach((planet) => delete planet.residents);
      setData(results);
    };
    getSystems();
  }, []);
  return [data];
}
