import { useState, useEffect, useCallback } from 'react';

const UsePlanets = () => {
  const [data, setData] = useState();

  const getPlanets = useCallback(async () => {
    let request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    request = await request.json();
    const newArray = Object.values(request.results).map((e) => {
      delete e.residents;
      return e;
    });
    setData(newArray);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return {
    data,
  };
};

export default UsePlanets;
