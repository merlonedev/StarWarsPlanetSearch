import React from 'react';
import './App.css';

import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import ShowFilters from './components/ShowFilters';
import TableComponent from './components/TableComponent';
import ApiContextProvider from './context/ApiContextProvider';

function App() {
  return (
    <ApiContextProvider>
      <FilterByName />
      <FilterByNumber />
      <ShowFilters />
      <TableComponent />
    </ApiContextProvider>
  );
}

export default App;
