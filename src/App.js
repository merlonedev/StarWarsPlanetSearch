import React from 'react';
import Tabela from './components/Tabela';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Tabela />
    </Provider>
  );
}

export default App;
