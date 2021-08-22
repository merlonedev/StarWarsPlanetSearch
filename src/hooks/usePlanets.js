import { useState, useEffect } from 'react';

const usePlanets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const firstRequisition = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
      setPlanets(result.results);
    };
    firstRequisition();
  }, []);

  return [planets, setPlanets];
};

export default usePlanets;
