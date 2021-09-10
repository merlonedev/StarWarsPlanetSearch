import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/table/Table';
import Input from './components/input/Input';
import Filter from './components/filter/Filter';

import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Input />
      <Filter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
