import React from 'react';
import './App.css';
import SearchBar from './componentes/SearchBar';
import Table from './componentes/Table';
import SWProvider from './context/Provider';

function App() {
  return (
    <SWProvider>
      <SearchBar />
      <Table />
    </SWProvider>
  );
}

export default App;
