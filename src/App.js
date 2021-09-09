import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumber />
      <Table />
    </Provider>
  );
}

export default App;
