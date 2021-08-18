import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsApi from '../services/planetsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanetsApi();
      setData(planets);
      setIsFetching(false);
    };
    getPlanets();
  });

  const context = {
    isFetching,
    data,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
