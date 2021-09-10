import React from 'react';
import PropTypes from 'prop-types';
import contextTable from './contextTable';
import usePlanets from '../hooks/usePlanets';

const Provider = ({ children }) => {
  const {
    data,
    filters,
    setFilters,
    filteredPlanets,
  } = usePlanets();

  const contextValue = {
    data,
    filters,
    setFilters,
    filteredPlanets,
  };

  return (
    <contextTable.Provider value={ contextValue }>
      { children }
    </contextTable.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
