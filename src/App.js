import React from 'react';
import Filters from './components/Filters';
import Provider from './context/Provider';
import Table from './components/Table';
import './App.css';
import Header from './components/Header';
import Sorter from './components/Sorter';

function App() {
  return (
    <Provider>
      <Header />
      <Filters />
      <Sorter />
      <Table />
    </Provider>
  );
}

export default App;
