import React from 'react';
import './App.css';
import Table from './components/Table';
import PayloadProvider from './components/PayloadProvider';
import FilterProvider from './components/FilterProvider';
import Filters from './components/Filters';

function App() {
  return (
    <FilterProvider>
      <Filters />
      <PayloadProvider>
        <Table />
      </PayloadProvider>
    </FilterProvider>
  );
}

export default App;
