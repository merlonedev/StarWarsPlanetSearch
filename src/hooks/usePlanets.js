import { useState, useEffect } from 'react';
import fetchPlanets from '../services/planetsAPI';

function usePlanets() {
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function getPlanets() {
      const response = await fetchPlanets();
      setPlanets(response);
    }
    getPlanets();
  }, []);

  return [planets, setPlanets];
}

export default usePlanets;
