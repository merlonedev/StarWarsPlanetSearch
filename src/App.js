import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './provider/Provider';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
