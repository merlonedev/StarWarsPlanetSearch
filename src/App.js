import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <MainPage />
    </PlanetProvider>
  );
}

export default App;
