import React, { useState } from 'react';
import Proptypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const contextValue = {
    data,
    setData,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ contextValue }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
