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
    filterByNumericValues: [{
      column: '', comparison: '', value: '',
    }],
  });
  const [numericValue, setNumericValue] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi.dev/api/planets';
      // const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((dataJson) => dataJson.json());
      setData(results);
    };
    getPlanets();
  }, [setData]);

  const { name } = filters.filterByName;
  useEffect(() => {
    setFilterPlanets(
      data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, data]);

  useEffect(() => {
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ column, comparison, value }) => (
      value && setFilterPlanets((thePlanet) => thePlanet.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        return Number(planet[column]) === Number(value);
      }))
    ));
  }, [filters]);

  const contextData = {
    data,
    filters,
    setFilters,
    filterPlanets,
    setFilterPlanets,
    numericValue,
    setNumericValue,
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
