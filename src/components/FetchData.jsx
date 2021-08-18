import { useContext, useEffect } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

const FetchData = () => {
  const { setData } = useContext(StarWarsPlanetsContext);
  console.log(setData);
  useEffect(() => {
    const getPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endPoint);
      const resultJson = await result.json();
      const { results } = resultJson;
      setData(results);
    };

    getPlanets();
  }, [setData]);

  return null;
};

export default FetchData;
