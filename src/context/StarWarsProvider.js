import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import apiPlanets from '../services/apiPlanets';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    (async () => {
      const planets = await apiPlanets();
      setData(planets);
    })();
  }, []);

  const context = {
    data,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

const { oneOfType, arrayOf, node } = PropTypes;

StarWarsProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default StarWarsProvider;
