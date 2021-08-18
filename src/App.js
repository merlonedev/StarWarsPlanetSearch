import React from 'react';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <span>Iniciando projeto!</span>
    </Provider>
  );
}

export default App;
