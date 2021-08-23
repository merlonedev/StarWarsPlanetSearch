import React from 'react';
import Tabela from './components/Tabela';
import './App.css';
import Provider from './context/Provider';
import Input from './components/Input';
import Select from './components/Select';

function App() {
  return (
    <Provider>
      <Input />
      <Select />
      <Tabela />
    </Provider>
  );
}

export default App;
