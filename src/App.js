import React from 'react';
import Provider from './context/Provider';
import './App.css';
import PlanetApi from './components/PlanetApi';

function App() {
  return (
    <Provider>
      <div>
        <PlanetApi />
      </div>
    </Provider>
  );
}

export default App;
