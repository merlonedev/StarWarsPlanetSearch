import React from 'react';
import Provider from './Context/Provider';
import Filters from './components/Filters';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters />
      <h1>GALATIC EMPIRE COUNTER ATTACKS!</h1>
      <Table />
    </Provider>
  );
}

export default App;
