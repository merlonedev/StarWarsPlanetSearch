import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isItLoading, setIsItLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  async function getPlanets() {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    // const results = await fetch('https://swapi.dev/api/planets/');
    const data = await results.json();
    console.log(data);
    setPlanets(data.results);
    setIsItLoading(false);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  const contextPlanets = {
    planets,
    getPlanets,
    isItLoading,
    filters,
    setFilters,
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
