import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import MainProvider from './context/MainProvider';

function App() {
  return (
    <MainProvider>
      <Filters />
      <Table />
    </MainProvider>
  );
}

export default App;
