import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Provider from './Context/Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Header />
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
