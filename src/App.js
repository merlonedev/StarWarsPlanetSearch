import React from 'react';
import Provider from './provider/Provider';
import './App.css';
import Principal from './pages/Principal';
import Filtro from './components/Filtro';

function App() {
  return (
    <Provider>
      <Filtro />
      <Principal />
    </Provider>
  );
}

export default App;
