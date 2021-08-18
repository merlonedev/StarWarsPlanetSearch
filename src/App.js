import React from 'react';
import './App.css';
import ProviderContext from './context/ProviderContext';
import Home from './pages/Home';

function App() {
  return (
    <ProviderContext>
      <Home />
    </ProviderContext>
  );
}

export default App;
