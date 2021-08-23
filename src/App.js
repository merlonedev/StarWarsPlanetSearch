import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterInput from './components/FilterInput';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <FilterInput />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
