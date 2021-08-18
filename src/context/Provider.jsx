import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import useFetchData from '../hooks/useFetchData';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [state, loading] = useFetchData();

  useEffect(() => {
    setData(state);
  }, [state]);

  const contextValue = {
    data,
    loading,
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
