import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  async function fetchPlanets() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const results = await fetch(url);
    const responseJSON = await results.json();
    const stateNoKeyResidents = responseJSON.results
      .filter((planet) => delete planet.residents);
    setState(stateNoKeyResidents);
    setFilteredPlanets(stateNoKeyResidents);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValues = {
    state,
    setState,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <MyContext.Provider value={ contextValues }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
