import React from 'react';
import './App.css';
import Table from './Components/Table';
import CtxProvider from './Context/CtxProvider';

function App() {
  return (
    <CtxProvider>
      <Table />
    </CtxProvider>
  );
}

export default App;
