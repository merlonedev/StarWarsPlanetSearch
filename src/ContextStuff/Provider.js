import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import planetsFetch from '../services/planetFetch';

export default function Provider({ children }) {
  const [data, setData] = useState({});
  const [numericFilter, setNumericFilter] = useState({});
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

  useEffect(() => {
    const requestPlanets = async () => {
      const planets = await planetsFetch();
      planets.results.forEach((planet) => delete planet.residents);
      setData(planets);
    };
    requestPlanets();
  }, []);

  const context = {
    data,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(Object),
}.isRequired;
