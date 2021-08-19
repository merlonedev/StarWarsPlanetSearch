import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import InputFilters from './components/InputFilters';
import './App.css';

function App() {
  return (
    <Provider>
      <InputFilters />
      <Table />
    </Provider>
  );
}

export default App;
