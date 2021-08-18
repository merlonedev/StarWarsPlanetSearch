import { useState, useEffect } from 'react';

function usePlanets() {
  const defaultURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planetsURL, setPlanetsURL] = useState(defaultURL);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const require = await fetch(planetsURL);
      const data = await require.json();
      const result = data.results;
      result.map((item) => delete item.residents);
      setPlanets(result);
    };
    fetchPlanets();
  }, [planetsURL]);

  return [planets, setPlanetsURL];
}

export default usePlanets;
