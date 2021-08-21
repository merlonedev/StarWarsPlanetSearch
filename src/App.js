import React from 'react';
import './App.css';
import { ContextProvider } from './Context/Context';
import Table from './Components/Table';
import FilterForm from './Components/FilterForm';

function App() {
  return (
    <ContextProvider>
      <FilterForm />
      <Table />
    </ContextProvider>
  );
}

export default App;
