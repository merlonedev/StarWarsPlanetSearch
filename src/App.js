import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/table';
import SearchBar from './components/searchBar';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
