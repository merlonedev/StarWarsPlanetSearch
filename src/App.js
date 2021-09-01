import React from 'react';
import Provider from './context/Provider';
import './App.css';
import FilterName from './components/FilterName';
import PlanetApi from './components/PlanetApi';
import FilterValue from './components/FilterValue';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterValue />
      <PlanetApi />
    </Provider>
  );
}

export default App;
