import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import getPlanets from '../services/SWApi';
import { getInitialSorted } from '../helpers/functions';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState('');
  const [shouldFilterNumber, setshouldFilterNumber] = useState(false);
  const [shouldFilterSort, setshouldFilterSort] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
    ],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    const setupPlanet = async () => {
      const planet = await getPlanets();
      const filterRoundSorted = getInitialSorted(planet);
      setPlanets(filterRoundSorted);
    };
    setupPlanet();
  },
  []);

  useEffect(() => {
    const setupPlanetsToFilter = async () => {
      const planet = await getPlanets();
      const filterRoundSorted = getInitialSorted(planet);
      setFilteredPlanets(filterRoundSorted);
    };
    setupPlanetsToFilter();
  },
  []);

  const globalState = {
    planets,
    setPlanets,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
    shouldFilterNumber,
    setshouldFilterNumber,
    shouldFilterSort,
    setshouldFilterSort,
  };

  return (
    <myContext.Provider value={ globalState }>
      {children}
    </myContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
