import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import fetchPlanets from '../api/fetchPlanets';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const requestAPI = async () => {
      try {
        const results = await fetchPlanets();
        setData(results);
      } catch (error) {
        setFetchError(error);
      }
    };
    requestAPI();
  }, []);

  const setFilterByName = ({ target: { value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByName: {
        name: value,
      },
    }));
  };

  const contextValue = {
    data,
    fetchError,
    filters,
    setFilterByName,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
