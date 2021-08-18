import { useState, useEffect } from 'react';
import fetchPlanets from '../services/planetsAPI';

function usePlanets() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  // const [headers, setHeaders] = useState([]);
  // const [planetsInfo, setPlanetsInfo] = useState([]);

  // function filterHeaders(planet) {
  //   const filtered = Object.keys(planet).filter((e) => e !== 'residents');
  //   setHeaders(filtered);
  // }

  // function removeResidentsInfo(planets) {
  //   const filtered = planets.map((e) => delete e.residents);
  //   return filtered;
  // }

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
