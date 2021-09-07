import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetch';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [names, setNames] = useState('');

  const state = {
    filters: {
      filterByName: {
        name: names,
      },
    },
  };

  useEffect(() => {
    const fetchPlanet = async () => {
      const planets = await fetchPlanets();
      setData(planets);
    };
    fetchPlanet();
  }, []);

  const filterPlanets = (dataPlanet) => {
    const { filters: { filterByName } } = state;

    if (filterByName.name !== '') {
      return dataPlanet.filter(({ name }) => name.includes(filterByName.name));
    }
    return dataPlanet;
  };

  const contextValue = {
    data,
    setData,
    filterPlanets,
    setNames,
    state,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
