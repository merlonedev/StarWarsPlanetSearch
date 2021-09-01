import React from 'react';
import PlanetProvider from './Context/PlanetProvider';
import './App.css';
import PlanetTable from './components/PlanetTable';
import PlanetsFilter from './components/PlanetsFilter';

function App() {
  return (
    <PlanetProvider>
      <PlanetsFilter />
      <PlanetTable />
    </PlanetProvider>
  );
}

export default App;
