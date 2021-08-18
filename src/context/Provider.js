import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  async function getPlanets() {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await results.json();
    setPlanets(data.results);
  }

  const contextPlanets = {
    planets,
    getPlanets,
  };

  return (
    <context.Provider value={ contextPlanets }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
