import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchApi from '../services/fetchApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      setData(await fetchApi());
    };
    getPlanets();
  }, []);

  const context = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
