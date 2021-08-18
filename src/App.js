import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <Provider>
      <Input testId="name-filter" />
      <Table />
    </Provider>
  );
}

export default App;
