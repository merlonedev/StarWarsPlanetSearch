import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import getPlanets from '../services/SWApi';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState('');

  useEffect(() => {
    const setupPlanet = async () => {
      const planet = await getPlanets();
      setPlanets(planet);
    };
    setupPlanet();
  },
  []);

  const globalState = {
    planets, setPlanets,
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
