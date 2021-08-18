import React from 'react';
import './App.css';
import { Header, Table } from './components';
import FilterProvider from './context/FilterProvider';

function App() {
  return (
    <FilterProvider>
      <Header />
      <Table />
    </FilterProvider>
  );
}

export default App;
