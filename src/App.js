import React from 'react';
import './App.css';
import GetPlanet from './components/GetPlanet';
import { PlanetProvider } from './context/Provider';

// commit inicial

function App() {
  return (
    <div>
      <PlanetProvider>
        <GetPlanet />
      </PlanetProvider>
    </div>
  );
}

export default App;
