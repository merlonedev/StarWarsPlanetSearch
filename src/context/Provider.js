import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const INITIAL_AVAILABLE_FILTERS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [filteredData, setFilteredData] = useState([]);
  const [availableFilters, setAvailableFilters] = useState(INITIAL_AVAILABLE_FILTERS);
  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    filteredData,
    setFilteredData,
    availableFilters,
    setAvailableFilters,
  };

  useEffect(() => {
    const applyFilters = (results) => {
      setFilteredData(data);
      const { filterByName: { name }, filterByNumericValues } = filters;

      let filtered = results.filter((result) => result.name.includes(name));

      filterByNumericValues.forEach((filter) => {
        if (filter.comparison === 'maior que') {
          filtered = filtered.filter((result) => Number(result[filter.column]) > Number(filter.value));
        }
        if (filter.comparison === 'menor que') {
          filtered = filtered.filter((result) => Number(result[filter.column]) < Number(filter.value));
        }
        if (filter.comparison === 'igual a') {
          filtered = filtered.filter((result) => Number(result[filter.column]) === Number(filter.value));
        }
      });

      return filtered;
    };
    setFilteredData(applyFilters(data));
  }, [filters, data]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((stuff) => stuff.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
