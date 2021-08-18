import React from 'react';
import './App.css';
import { ProviderContext } from './context/Provider';
import StarWarsPage from './pages/StarWarsPage';

function App() {
  return (
    <ProviderContext>
      <StarWarsPage />
    </ProviderContext>
  );
}

export default App;
