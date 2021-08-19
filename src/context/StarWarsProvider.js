import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import apiPlanets from '../services/apiPlanets';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  useEffect(() => {
    (async () => {
      const planets = await apiPlanets();
      const sortedPlanets = [...planets]
        .sort(({ name: a }, { name: b }) => a.localeCompare(b));
      setData(sortedPlanets);
    })();
  }, []);

  const context = {
    data,
    setData,
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
