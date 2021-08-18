import React from 'react';
import './App.css';

import PlanetProvider from './context/PlanetProvider';

import Table from './components/Table';

export default function App() {
  return (
    <PlanetProvider>
      <Table />
    </PlanetProvider>
  );
}
