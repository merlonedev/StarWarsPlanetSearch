import React from 'react';
import './App.css';
import Filter from './Components/Filter';
import Table from './Components/Table';
import PlanetAPI from './Contexts/planetsAPI';

function App() {
  return (
    <PlanetAPI>
      <Filter />
      <Table />
    </PlanetAPI>
  );
}

export default App;
