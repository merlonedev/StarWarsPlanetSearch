import React from 'react';
import './App.css';

import FilterByName from './components/FilterByName';
import ShowFilters from './components/ShowFilters';
import TableComponent from './components/TableComponent';
import ApiContextProvider from './context/ApiContextProvider';

function App() {
  return (
    <ApiContextProvider>
      <FilterByName />
      <ShowFilters />
      <TableComponent />
    </ApiContextProvider>
  );
}

export default App;
