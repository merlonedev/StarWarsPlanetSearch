import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Header() {
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
    <span>May the force be with You!</span>
  );
}

export default Header;
