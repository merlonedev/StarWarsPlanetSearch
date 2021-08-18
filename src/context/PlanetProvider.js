import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchApi from '../services/api';

export default function PlanetProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi().then((response) => setData(response));
  }, []);

  const context = {
    data,
    fetchApi,
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
