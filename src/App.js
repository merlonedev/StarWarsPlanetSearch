import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterSearch from './components/FilterSearch';
import Selectors from './components/Selectors';

function App() {
  return (

    <Provider>
      <FilterSearch />

      <Selectors />

      <Table />

    </Provider>

  );
}

export default App;
