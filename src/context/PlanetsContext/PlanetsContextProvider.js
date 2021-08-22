import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../../services';

export default function PlanetsContextProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const getPlanets = async () => {
      const results = await fetchPlanets();
      setData(results);
    };
    getPlanets();
  }, []);

  const contextValue = {
    data,
    setData,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
