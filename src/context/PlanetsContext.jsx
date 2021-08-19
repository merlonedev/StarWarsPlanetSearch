import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import UsePlanets from '../hooks/UsePlanets';
import useFilters from '../hooks/useFilters';

export const PlanetsContext = createContext();

export const ContextProvider = ({ children }) => {
  const { data } = UsePlanets();
  const { filtersOptions, updateFilters,
    filteredData, filters, removeFilter } = useFilters();

  return (
    <PlanetsContext.Provider
      value={ {
        filteredData, data, filtersOptions, updateFilters, filters, removeFilter,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
