import React, { useState, createContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import FetchPlanets from './FetchPlanets';

export const ContextProvider = createContext();

export const StarWarsContext = ({ children }) => {
  const [planets, setPlanets] = useState('');

  const getPlanets = async () => {
    const request = await FetchPlanets();
    const newPlanets = Object.values(request.results).map((planet) => {
      delete planet.residents;
      return planet;
    });
    setPlanets(newPlanets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planets, setPlanets } }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsContext.propTypes = {
  children: Proptypes.node.isRequired,
};
