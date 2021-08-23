import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const require = await fetch(URL);
        const { results } = await require.json();
        setData(results);
      } catch (error) {
        return (error);
      }
    };

    getPlanets();
  }, []);

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
