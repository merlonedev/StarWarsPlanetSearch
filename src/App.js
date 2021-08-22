import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterSearch from './components/FilterSearch';

function App() {
  return (

    <Provider>
      <FilterSearch />

      <Table />

    </Provider>

  );
}

export default App;
