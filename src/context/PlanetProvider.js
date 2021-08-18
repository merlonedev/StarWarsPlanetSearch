import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchApi from '../services/api';

export default function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

  useEffect(() => {
    fetchApi().then((response) => setData(response));
  }, []);

  const context = {
    data,
    filter,
    filterNumeric,
    fetchApi,
    setFilter,
    setFilterNumeric,
  };

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
