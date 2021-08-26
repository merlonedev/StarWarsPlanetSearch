import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(URL_API);
      const { results } = await response.json();
      setData(results);
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
