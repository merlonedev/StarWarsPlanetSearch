import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });

  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
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
  // planet 'if' population > 10 return planets
  useEffect(() => {
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ column, comparison, value }) => (
      value && setFilteredPlanets((prevsPlanets) => prevsPlanets.filter((planet) => {
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

  const contextValue = {
    data,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
    numericFilters,
    setNumericFilters,
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
// Vinicius Tavares
// https://github.com/tryber/sd-012-project-starwars-planets-search/commit/5dbc25783415d5c030b56bebf60a559eb3c14b0c
// Eric Kreis
// https://github.com/tryber/sd-012-project-starwars-planets-search/pull/35/commits/fac6b0bb3e192f5d8e8370c382eb9f9938e99f17
