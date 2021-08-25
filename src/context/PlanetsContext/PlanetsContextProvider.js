import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../../services';

const OPTIONS_INITIAL_STATE = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
export default function PlanetsContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState(OPTIONS_INITIAL_STATE);
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [],
  });
  const [filteredData, setFilteredData] = useState(data);

  const range = [
    'maior que',
    'menor que',
    'igual a',
  ];

  useEffect(() => {
    const getPlanets = async () => {
      const results = await fetchPlanets();
      setData(results);
    };
    getPlanets();
  }, []);

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    filteredData,
    setFilteredData,
    options,
    setOptions,
    range,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
