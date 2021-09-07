import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
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
