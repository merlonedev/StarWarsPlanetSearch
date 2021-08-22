import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import './App.css';
import FilterName from './components/FilterName';

function App() {
  return (
    <Provider>
      <FilterName />
      <Table />
    </Provider>
  );
}

export default App;
