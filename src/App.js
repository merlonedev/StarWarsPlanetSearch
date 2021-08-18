import React from 'react';
import Filters from './components/Filters';
import Provider from './Context/Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters />
      <h1>GALATIC EMPIRE RULES !!!</h1>
      <Table />
    </Provider>
  );
}

export default App;
