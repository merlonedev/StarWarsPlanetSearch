import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <Provider>
      <Search />
      <Table />
    </Provider>
  );
}

export default App;
