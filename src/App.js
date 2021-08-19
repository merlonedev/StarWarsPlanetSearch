import React from 'react';
import './App.css';
import { StarWarsProvider } from './context/SWProvider';
import Home from './pages/Home';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
