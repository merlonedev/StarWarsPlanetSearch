import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Input from './components/Inputs';

function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
