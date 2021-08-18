import React from 'react';
import Filters from './components/Filters';
import Provider from './context/Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters />
      <span>May the force be with You</span>
      <Table />
    </Provider>
  );
}

export default App;
