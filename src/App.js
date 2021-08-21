import React from 'react';
import './App.css';
import { ContextProvider } from './Context/Context';
import Table from './Components/table';

function App() {
  return (
    <ContextProvider>
      <Table />
    </ContextProvider>
  );
}

export default App;
