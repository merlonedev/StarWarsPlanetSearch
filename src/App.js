import React from 'react';
import { ContextProvider } from './Context/PlanetContext';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
