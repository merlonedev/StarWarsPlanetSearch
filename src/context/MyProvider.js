import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  async function fetchPlanets() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const results = await fetch(url);
    const responseJSON = await results.json();
    const stateNoKeyResidents = responseJSON.results
      .filter((planet) => delete planet.residents);
    setPlanets(stateNoKeyResidents);
    setFilteredPlanets(stateNoKeyResidents);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValues = {
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
    planets,
    setPlanets,
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
