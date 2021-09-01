import React from 'react';
import PlanetTable from './components/PlanetTable';
import PlanetProvider from './Context/Provider';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <PlanetTable />
    </PlanetProvider>
  );
}

export default App;
