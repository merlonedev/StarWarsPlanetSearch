import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilters] = useState('');

  useEffect(() => {
    const fetchPlanets = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then(({ results }) => setData(results));
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
    filterByName,
    setFilters,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {
        children
      }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
