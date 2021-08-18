import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsApi from '../services/planetsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanetsApi();
      planets.forEach((planet) => {
        delete planet.residents;
      });
      setData(planets);
      setIsFetching(false);
      setIsMounted(true);
    };
    if (!isMounted) getPlanets();
  });

  const context = {
    isFetching,
    data,
    filteredPlanets,
    setFilteredPlanets,
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
