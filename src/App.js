import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import './App.css';
import Select from './components/Select';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <Select />
      <Table />
    </Provider>
  );
}

export default App;
