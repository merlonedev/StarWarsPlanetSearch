import { useState, useEffect } from 'react';

const FetchHook = () => {
  const [data, setData] = useState();

  const fetchAPI = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    let result = await fetch(endpoint);
    result = await result.json();
    result = result.results;
    const filter = Object.values(result).map((e) => {
      delete e.residents;
      return e;
    });
    setData(filter);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return {
    data,
  };
};

export default FetchHook;
