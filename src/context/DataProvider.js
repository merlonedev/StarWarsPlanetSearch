import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataApi = async () => {
      const endpoint = 'https://swapi.dev/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      setData(results);
    };
    getDataApi();
  }, []);

  return (
    <DataContext.Provider value={ data }>
      { children }
    </DataContext.Provider>
  );
}

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
