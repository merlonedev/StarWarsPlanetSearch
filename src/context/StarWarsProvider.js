import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const contextValue = {
    data,
    setData,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
