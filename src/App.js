import React from 'react';
import './App.css';
import { ContextProvider } from './Context/Context';
import Table from './Components/table';
import FilterName from './Components/FilterName';

function App() {
  return (
    <ContextProvider>
      <FilterName />
      <Table />
    </ContextProvider>
  );
}

export default App;
