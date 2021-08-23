import { useState, useEffect } from 'react';
import fetchPlanets from '../services/planetsAPI';

function usePlanets() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPlanets() {
      const { results } = await fetchPlanets();
      results.forEach((e) => delete e.residents);
      setData(results);
      setLoading(false);
    }
    getPlanets();
  }, []);

  return [data, loading];
}

export default usePlanets;
