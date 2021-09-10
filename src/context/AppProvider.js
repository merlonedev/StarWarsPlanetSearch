import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services/fetchAPI';
import AppContext from './AppContext';

const STATE_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

export default function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsBase, setPlanetsBase] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState(STATE_FILTER);

  const fetchPlanets = async () => {
    const filteredResults = await fetchAPI();
    filteredResults.sort((a, b) => {
      const NEGATIVE = -1;
      const POSITIVE = 1;
      const ZERO = 0;
      const planetA = a.name.toLowerCase();
      const planetB = b.name.toLowerCase();

      if (planetA < planetB) return NEGATIVE;
      if (planetA > planetB) return POSITIVE;
      return ZERO;
    });
    setPlanets(filteredResults);
    setPlanetsBase(filteredResults);
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
    planetsBase,
    setPlanetsBase,
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
