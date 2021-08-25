import React, { useContext, useEffect } from 'react';
import AppContext from '../context/contextApp';

function Filters() {
  const { setData } = useContext(AppContext);

  useEffect(() => {
    const serachPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.results);
      setData(planets);
    };
    serachPlanets();
  }, [setData]);

  return (
    <span>
      Filters
    </span>

  );
}

export default Filters;
