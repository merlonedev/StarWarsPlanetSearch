import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
