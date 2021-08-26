import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <Provider>
      <span> STARWARS - PLANET SEARCH </span>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
