import React from 'react';
import './App.css';
import Table from './components/Table';
import Inputs from './components/Inputs';
import PlanetProvider from './context/PlanetProvider';
import Filter from './components/Fillter';

function App() {
  return (
    <PlanetProvider>
      <Inputs />
      <Filter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
