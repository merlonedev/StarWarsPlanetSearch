import React from 'react';
import './App.css';
import Home from './components/Home';
import ProviderStartWars from './context/ProviderStartWars';

function App() {
  return (
    <ProviderStartWars>
      <Home />
    </ProviderStartWars>
  );
}

export default App;
