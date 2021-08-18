import { useEffect, useState } from 'react';

const useFetchData = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endPoint);
      const resultJson = await result.json();
      const { results } = resultJson;
      setState(results);
      setLoading(false);
    };

    getPlanets();
  }, []);

  return [state, loading];
};

export default useFetchData;
