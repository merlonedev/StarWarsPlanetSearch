import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

const DataContext = createContext();
const INITIAL_LIST = {
  filterByName: {
    name: '',
  },
};

export default function DataProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState(INITIAL_LIST);
  const setFilterByName = (name) => {
    name = name.toLowerCase();
    setFilters({ filterByName: { name } });
  };

  const contextValue = { data, setData, filters, setFilterByName };

  return (
    <DataContext.Provider value={ contextValue }>
      { children }
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used inside a DataProvider');
  const { data, setData } = context;
  return { data, setData };
}

export function useFilter() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useFilter must be used inside a DataProvider');
  const { filters, setFilterByName } = context;
  return { filters, setFilterByName };
}

DataProvider.propTypes = {
  children: node.isRequired,
};
