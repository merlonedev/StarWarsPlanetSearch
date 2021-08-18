import React from 'react';
import './App.css';

import PlanetProvider from './context/PlanetProvider';

import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';

export default function App() {
  return (
    <PlanetProvider>
      <NameFilter />
      <NumericFilter />
      <Table />
    </PlanetProvider>
  );
}
