import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchPlanets from '../Helper/FetchPlanets';

export const PlanetContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');

  const getAPI = async () => {
    const request = await FetchPlanets();
    const newArray = Object.values(request.results).map((e) => {
      delete e.residents;
      return e;
    });
    setData(newArray);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <PlanetContext.Provider value={ { data, setData } }>
      {children}
    </PlanetContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
