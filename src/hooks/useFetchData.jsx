import { useEffect, useState } from 'react';

const useFetchData = () => {
  const [state, setState] = useState([]);
  const [stateCopy, setStateCopy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');

  useEffect(() => {
    const getPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endPoint);
      const resultJson = await result.json();
      const { results } = resultJson;
      setState(results);
      setStateCopy(results);
      setLoading(false);
    };

    getPlanets();
  }, []);

  useEffect(() => {
    const filteredPlanets = stateCopy.filter((planet) => planet.name.includes(input));
    setState(filteredPlanets);
  }, [input, stateCopy]);

  return [state, loading, input, setInput];
};

export default useFetchData;
