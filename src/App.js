import React from 'react';
import './App.css';
import PlanetAPI from './Contexts/planetsAPI';
import MainPage from './pages/MainPage';

function App() {
  return (
    <PlanetAPI>
      <MainPage />
    </PlanetAPI>
  );
}

export default App;
