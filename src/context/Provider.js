import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function MyProvider({ children }) {
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
      setData(results);
    };
    getPlanets();
  }, [setData]);

  const { filterByName: { name } } = filters;
  useEffect(() => {
    setFilteredPlanets(
      data.filter((planet) => planet.name
        .toLowerCase().includes(name.toLowerCase())),
    );
  }, [data, name]);

  const contextValue = {
    data,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MyProvider;
// Link
// https://codesandbox.io/embed/react-hooks-search-filter-4gnwc
