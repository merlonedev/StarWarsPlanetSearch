// vitals
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// context
import myContext from './myContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [],
  });
  const [globalOptions, setOptions] = useState(['population',
    'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  const globalState = {
    data,
    setData,
    filters,
    setFilters,
    globalOptions,
    setOptions,
  };

  return (
    <myContext.Provider value={ globalState }>{children}</myContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(Object),
}.isRequired;

export default PlanetProvider;
