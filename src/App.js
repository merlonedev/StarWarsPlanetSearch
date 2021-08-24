import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import Selectors from './components/Selectors';

function App() {
  return (
    <Provider>
      <span className="title">Star Wars Planets</span>
      <FilterName />
      <Selectors />
      <Table />
    </Provider>
  );
}

export default App;
