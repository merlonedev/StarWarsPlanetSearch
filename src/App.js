import React from 'react';
import Table from './Components/Table';
import './App.css';
import Filter from './Components/Filter';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
