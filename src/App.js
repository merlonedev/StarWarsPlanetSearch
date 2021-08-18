import React from 'react';
import Provider from './contexts/Provider';
import FilterPlanets from './components/FilterPlanets/FilterPlanets';
import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterPlanets />
      <Table />
    </Provider>
  );
}

export default App;
