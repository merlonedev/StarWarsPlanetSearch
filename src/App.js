import React from 'react';
import './App.css';
import Table from './components/Table';
import Inputs from './components/Inputs';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Inputs />
      <Table />
    </PlanetProvider>
  );
}

export default App;
