import React from 'react';
import Proptypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import useFetchData from '../hooks/useFetchData';

const Provider = ({ children }) => {
  const [state, loading, input, setInput] = useFetchData();

  const contextValue = {
    data: state,
    filters: {
      filterByName: {
        name: input,
      },
    },
    loading,
    setInput,
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
