import React from 'react';
import './App.css';
import MyProvider from './provider/MyProvider';
import Table from './components/Table';
import FilterName from './components/FilterName';

function App() {
  return (
    <MyProvider>
      <FilterName />
      <Table />
    </MyProvider>
  );
}

export default App;
