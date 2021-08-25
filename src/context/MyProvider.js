import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [state, setState] = useState([]);

  async function fetchPlanets() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    await fetch(url)
      .then((response) => response.json())
      .then((planets) => setState(planets.results));
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const hooks = {
    state, setState,
  };

  return (
    <MyContext.Provider value={ hooks }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
