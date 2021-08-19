import React from 'react';
import './App.css';
import { StarWarsPlanets } from './services/APIContext';
import PlanetsTable from './components/table';

function App() {
  return (
    <StarWarsPlanets>
      <PlanetsTable />
    </StarWarsPlanets>
  );
}

export default App;
