import React from 'react';
import './App.css';
import ProviderContext from './context/ProviderContext';

function App() {
  return (
    <ProviderContext>
      <span>Hello, App Wander!</span>
    </ProviderContext>
  );
}

export default App;
