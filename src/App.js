import React from 'react';
import Provider from './context/Provider';
import './App.css';
import FilterName from './components/FilterName';
import PlanetApi from './components/PlanetApi';

function App() {
  return (
    <Provider>
      <FilterName />
      <PlanetApi />
    </Provider>
  );
}

export default App;
