import React from 'react';
import './App.css';
import Table from './components/Table';
import MyProvider from './context/Provider';
import Filter from './components/Filter';

function App() {
  return (
    <MyProvider>
      <Filter />
      <Table />
    </MyProvider>
  );
}

export default App;
