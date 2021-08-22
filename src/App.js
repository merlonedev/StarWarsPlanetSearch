import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Header from './components/Header';
import Filters from './filters/Filters';

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
