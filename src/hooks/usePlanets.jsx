import { useEffect, useState } from 'react';

export default function usePlanets() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(URL).then((response) => response.json());
      results.forEach((result) => { delete result.residents; });
      setData(results);
      setLoading(false);
    };
    getPlanets();
  }, []);

  return [data, loading];
}
