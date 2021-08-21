import React from 'react';
import Tabela from './components/Tabela';
import './App.css';
import Provider from './context/Provider';
import Input from './components/Input';

function App() {
  return (
    <Provider>
      <Input />
      <Tabela />
    </Provider>
  );
}

export default App;
