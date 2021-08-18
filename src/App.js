import React from 'react';
import './App.css';
import { ProviderContext } from './context/Provider'

function App() {
  return (
    <ProviderContext>
      <span>Hello, App!</span>
    </ProviderContext>
  );
}

export default App;
