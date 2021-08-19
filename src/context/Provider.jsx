import React from 'react';
import Proptypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import useFetchData from '../hooks/useFetchData';

const Provider = ({ children }) => {
  const [
    state, loading, input, setInput,
    column, setColumn, comparison, setComparison,
    value, setValue, setState, stateCopy, setStateCopy,
  ] = useFetchData();

  const contextValue = {
    data: state,
    setState,
    filters: {
      filterByName: {
        name: input,
      },
    },
    loading,
    setInput,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    stateCopy,
    setStateCopy,
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
