import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetching = await fetch(PLANETS_URL);
      const { results } = await fetching.json();
      setData(results);
    };
    getPlanets();
  }, []);

  const contextValue = { data };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
