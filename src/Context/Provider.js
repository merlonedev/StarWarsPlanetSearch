import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requisitionPlanets from '../services/StarwarsAPI';

export const PlanetContext = createContext();

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    requisitionPlanets().then((response) => setPlanets(response.results));
  }, []);

  const context = {
    planets,
    setPlanets,
  };

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
