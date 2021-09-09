import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import UsedFilters from './components/UsedFilters';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumber />
      <UsedFilters />
      <Table />
    </Provider>
  );
}

export default App;
