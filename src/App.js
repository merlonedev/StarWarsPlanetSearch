import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import HeadingFilters from './components/HeadingFilters';

function App() {
  return (
    <PlanetProvider>
      <HeadingFilters />
      <Table />
    </PlanetProvider>
  );
}

export default App;
