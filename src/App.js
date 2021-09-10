import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import UsedFilters from './components/UsedFilters';
import Order from './components/Order';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumber />
      <UsedFilters />
      <Order />
      <Table />
    </Provider>
  );
}

export default App;
