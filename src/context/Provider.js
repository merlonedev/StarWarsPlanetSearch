import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import getPlanets from '../services/PlanetsFetch';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetList = await getPlanets();
      setData(planetList);
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
    setData,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
