import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import Form from './components/Form';

function App() {
  return (
    <Provider>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
