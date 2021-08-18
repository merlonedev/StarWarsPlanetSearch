import React from 'react';
import ActualFilters from './components/ActualFilters';
import ErrorAltert from './components/ErrorAlert';
import FiltersContainer from './components/FiltersContainer';
import Table from './components/Table';
import MyProvider from './Context';

function App() {
  return (
    <MyProvider>
      <FiltersContainer />
      <ActualFilters />
      <ErrorAltert />
      <Table />
    </MyProvider>
  );
}

export default App;
