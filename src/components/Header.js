import React, { useContext, useEffect } from 'react';
import AppContext from '../Context/appContext';

function Header() {
  const { setInfo } = useContext(AppContext);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.results);
      setInfo(planets);
    };
    getPlanets();
  }, [setInfo]);

  return (
    <h1>GALATIC EMPIRE RULES !!!</h1>
  );
}

export default Header;
