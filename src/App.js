import React from 'react';
import FiltersContainer from './components/FiltersContainer';
import Table from './components/Table';
import MyProvider from './Context';

function App() {
  return (
    <MyProvider>
      <FiltersContainer />
      <Table />
    </MyProvider>
  );
}

export default App;
