import React from 'react';
import './App.css';
import Table from './components/Table';
import MyProvider from './providers/MyProvider';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
