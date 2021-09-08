import React from 'react';
import Provider from './provider/Provider';
import Table from './components/Table';
import './App.css';
import Filters from './components/Filters';
import Sort from './components/Sort';

function App() {
  return (
    <Provider>
      <Filters />
      <Sort />
      <Table />
    </Provider>
  );
}

export default App;
