import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState({});
  const contextValue = { data, setData };
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

DataProvider.propTypes = {
  children: node.isRequired,
};
