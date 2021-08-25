import React, { useContext, useEffect } from 'react';
import AppContext from '../contextApp';

function Filters() {
  const { setData } = useContext(AppContext);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.results);
      setData(planets);
    };
    getPlanets();
  }, [setData]);

  return (
    <span>FILTERS</span>
  );
}

export default Filters;
