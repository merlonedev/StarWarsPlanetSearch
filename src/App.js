import React from 'react';
import ActualFilters from './components/ActualFilters';
import FiltersContainer from './components/FiltersContainer';
import Table from './components/Table';
import MyProvider from './Context';

function App() {
  return (
    <MyProvider>
      <FiltersContainer />
      <ActualFilters />
      <Table />
    </MyProvider>
  );
}

export default App;
