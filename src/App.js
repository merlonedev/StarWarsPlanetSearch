import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Header from './components/Header';
import Filter from './components/Filter';

function App() {
  return (
    <Provider>
      <Header />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
