import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchApi from '../services/fetchApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    const getPlanets = async () => {
      setData(await fetchApi());
    };
    getPlanets();
  }, []);

  const filterName = ({ target }) => {
    setFilters({ filters: { filterByName: { name: target.value } } });
  };

  const context = {
    data,
    filters,
    filterName,
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
