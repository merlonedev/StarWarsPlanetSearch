import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {},
  });

  useEffect(() => {
    const getDataApi = async () => {
      const endpoint = 'https://swapi.dev/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());

      // localeCompare() referencia da documentação de array.sort() do mozilla
      const sortedPlanets = [...results].sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedPlanets);
    };
    getDataApi();
  }, []);

  const contextValue = { data, filters, setFilters, setData };

  return (
    <DataContext.Provider value={ contextValue }>
      { children }
    </DataContext.Provider>
  );
}

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
