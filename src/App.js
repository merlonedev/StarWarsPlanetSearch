import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <FilterForm />
      <Table />
    </MyProvider>
  );
}

export default App;
