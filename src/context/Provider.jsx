import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';

export default function Provider({ children }) {
  const [data, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(URL).then((r) => r.json());
      results.forEach((planet) => delete planet.residents);
      setPlanets(results);
    };
    fetchAPI();
  }, []);

  const INITIAL_STATE = {
    data,
    setFilterByName,
    setFilterByNumericValues,
    filters: {
      filterByName,
      filterByNumericValues,
    },
  };

  return (
    <AppContext.Provider value={ INITIAL_STATE }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
