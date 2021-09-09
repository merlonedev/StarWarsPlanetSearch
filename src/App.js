import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import Table from './components/Table';
import InputSearch from './components/InputSearch';

function App() {
  return (
    <AppProvider>
      <InputSearch />
      <Table />
    </AppProvider>
  );
}

export default App;
