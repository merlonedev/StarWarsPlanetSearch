import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getPlanets = async () => {
      // const endpoint = 'https://swapi.dev/api/planets';
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((dataJson) => dataJson.json());
      setData(results);
    };
    getPlanets();
  });

  const { name } = filters.filterByName;
  useEffect(() => {
    setFilterPlanets(
      data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, data]);

  const contextData = {
    data,
    filters,
    setFilters,
    filterPlanets,
    setFilterPlanets,
  };

  return (
    <MyContext.Provider value={ contextData }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
