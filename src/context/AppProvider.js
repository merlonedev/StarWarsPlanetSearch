import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI, fetchNoResidents } from '../services/fetchAPI';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsData = await fetchAPI();
      fetchNoResidents(planetsData);
      setPLanets(planetsData);
    };

    fetchPlanets();
  }, []);

  const context = {
    planets,
    setPlanets,
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
