import React from 'react';
import './App.css';
import PlanetsContextProvider from './context/PlanetsContext/PlanetsContextProvider';
import Home from './pages/Home';

function App() {
  return (
    <PlanetsContextProvider>
      <Home />
    </PlanetsContextProvider>
  );
}

export default App;
