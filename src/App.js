import React from 'react';
import Provider from './context/Provider';
import { Filter, Table } from './components';
import './App.css';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
