import React from 'react';
import Provider from './provider/Provider';
import './App.css';
import Principal from './pages/Principal';
import Filtro from './components/Filtro';
import FiltroNumerico from './components/Filtro numerico';

function App() {
  return (
    <Provider>
      <Filtro />
      <FiltroNumerico />
      <Principal />
    </Provider>
  );
}

export default App;
