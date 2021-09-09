import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import './App.css';
import FilterName from './components/FilterName';
import NumericFilter from './components/NumericFilter';
import ActiveFilters from './components/ActiveFilters';
import OrderFilter from './components/OrderColumn';

function App() {
  return (
    <Provider>
      <FilterName />
      <NumericFilter />
      <OrderFilter />
      <ActiveFilters />
      <Table />
    </Provider>
  );
}

export default App;
