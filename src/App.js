import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import FiltersUsed from './components/FiltersUsed';
import MyProvider from './context/MainContext';

function App() {
  return (
    <MyProvider>
      <Filters />
      <FiltersUsed />
      <Table />
    </MyProvider>
  );
}

export default App;
