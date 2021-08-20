import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
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
    },
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
