import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import contextTable from './contextTable';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const { results } = await response.json();
      const planets = results.map((planet) => {
        const { residents, ...rest } = planet;
        return rest;
      });

      setData(planets);
      setFilteredPlanets(planets);
    };

    getPlanets();
  }, []);

  useEffect(() => {
    setFilteredPlanets(data
      .filter(({ name }) => name.includes(filters.filterByName.name)));
  }, [filters, data]);

  const contextValue = {
    data,
    filters,
    setFilters,
    filteredPlanets,
  };

  return (
    <contextTable.Provider value={ contextValue }>
      { children }
    </contextTable.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
