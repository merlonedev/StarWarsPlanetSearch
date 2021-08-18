import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>

  );
}

export default App;
