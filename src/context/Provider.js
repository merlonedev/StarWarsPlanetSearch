import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const myContext = {
    planets,
    setPlanets,
  };

  return (
    <PlanetsContext.Provider value={ myContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
