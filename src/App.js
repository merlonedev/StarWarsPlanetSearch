import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Filters from './components/Filters';
import FiltersData from './components/FiltersData';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters />
      <FiltersData />
      <Table />
    </Provider>
  );
}

export default App;
