import { useEffect, useState } from 'react';

const usePlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const { results } = await response.json();

      results.forEach((planet) => delete planet.residents);
      setPlanets(results);
      setLoading(false);
    };
    getPlanets();
  }, []);

  return [planets, loading];
};

export default usePlanets;
