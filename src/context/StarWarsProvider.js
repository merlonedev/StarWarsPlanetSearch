import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import getPlanets from '../services/SWApi';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState('');
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
  const ONE = 1;
  const DEC_ONE = -1;

  useEffect(() => {
    const setupPlanet = async () => {
      const planet = await getPlanets();
      const filterRoundSorted = planet.sort((a, b) => {
        if (a.name > b.name) {
          return ONE;
        }
        if (b.name > a.name) {
          return DEC_ONE;
        }
        return 0;
      });
      setPlanets(filterRoundSorted);
    };
    setupPlanet();
  },
  []);

  const globalState = {
    planets, setPlanets, filters, setFilters,
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
