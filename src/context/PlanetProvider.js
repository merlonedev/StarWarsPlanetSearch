import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);

  const globalState = {
    data,
    setData,
  };

  return (
    <myContext.Provider value={ globalState }>{children}</myContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(Object),
}.isRequired;

export default PlanetProvider;
