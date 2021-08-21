import React from 'react';
import Table from './components/Table';
import Header from './components/Header';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
