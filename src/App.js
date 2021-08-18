import React from 'react';
import Table from './components/Table';
import './App.css';
import MyProvider from './context/Provider';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
