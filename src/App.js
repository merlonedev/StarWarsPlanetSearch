import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import './App.css';
import FilterName from './components/FilterName';
import NumericFilter from './components/NumericFilter';
import ActiveFilters from './components/ActiveFilters';

function App() {
  return (
    <Provider>
      <FilterName />
      <NumericFilter />
      <ActiveFilters />
      <Table />
    </Provider>
  );
}

export default App;
