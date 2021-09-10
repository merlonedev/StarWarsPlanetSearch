import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import MainProvider from './context/MainProvider';

function App() {
  return (
    <MainProvider>
      <Filter />
      <Table />
    </MainProvider>
  );
}

export default App;
