import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });

  useEffect(() => {
    const getDataApi = async () => {
      const endpoint = 'https://swapi.dev/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      setData(results);
    };
    getDataApi();
  }, []);

  const contextValue = { data, filter, setFilter };

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
