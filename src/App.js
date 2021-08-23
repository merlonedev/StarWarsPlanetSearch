import React from 'react';
import './App.css';
import MyProvider from './provider/MyProvider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterNumbers from './components/FilterNumbers';

function App() {
  return (
    <MyProvider>
      <FilterName />
      <FilterNumbers />
      <Table />
    </MyProvider>
  );
}

export default App;
