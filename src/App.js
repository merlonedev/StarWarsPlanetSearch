import React from 'react';
import './App.css';
import MyProvider from './MyProvider';
import Table from './Table';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
