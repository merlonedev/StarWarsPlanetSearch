import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [filters, setFilters] = useState({});
  const contextValue = { filters, setFilters };
  return (
    <FilterContext.Provider value={ contextValue }>
      { children }
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilter must be used inside a FilterProvider');
  const { filters, setFilters } = context;
  return { filters, setFilters };
}

FilterProvider.propTypes = {
  children: node.isRequired,
};
