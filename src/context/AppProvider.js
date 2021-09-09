import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services/fetchAPI';
import AppContext from './AppContext';

const STATE_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

export default function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState(STATE_FILTER);

  const fetchPlanets = async () => {
    const filteredResults = await fetchAPI();
    filteredResults.forEach((planet) => delete planet.residents);
    setPlanets(filteredResults);
    setLoading(true);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    planets,
    setPlanets,
    isLoading,
    setLoading,
    searchInput,
    setSearchInput,
    filter,
    setFilter,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes
    .oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
