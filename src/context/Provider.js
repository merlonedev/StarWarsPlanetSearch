import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetch';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanet = async () => {
      const planets = await fetchPlanets();
      setData(planets);
    };
    fetchPlanet();
  }, []);

  const contextValue = {
    data,
    setData,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
