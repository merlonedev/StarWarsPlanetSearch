import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import Search from './components/Search';
import NumericFilter from './components/NumericFilter';
import './App.css';

function App() {
  return (
    <Provider>
      <Search />
      <NumericFilter />
      <Table />
    </Provider>
  );
}

export default App;
