import React, { useState, createContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import fetchPlanets from '../uteis/api';

export const Context = createContext();

export const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState('');

  const getPlanets = async () => {
    const request = await fetchPlanets();
    const newPlanets = Object.values(request.results).map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(newPlanets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Context.Provider value={ { data, setData } }>
      {children}
    </Context.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
