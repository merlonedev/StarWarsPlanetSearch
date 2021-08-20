import React from 'react';
import './App.css';
import Table from './components/Table';
import Input from './components/Input';
import Provider from './context/Provider';
import Filter2 from './components/Filter2';

function App() {
  return (
    <Provider>
      <Input />
      <Filter2 />
      <Table />
    </Provider>
  );
}

export default App;
