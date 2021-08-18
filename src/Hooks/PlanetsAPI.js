import { useEffect, useState } from 'react';

function PlanetsAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((result) => result.json());
      setData(results);
    };

    getPlanets();
  }, []);

  return [data];
}

export default PlanetsAPI;
