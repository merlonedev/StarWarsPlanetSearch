import React from 'react';
import AppProvider from './context/AppProvider';
import Table from './Components/Table';
import Form from './Components/Form';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Form />
      <Table />
    </AppProvider>
  );
}

export default App;
