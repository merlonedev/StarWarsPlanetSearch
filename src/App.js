import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterNAme from './components/FilterName';
import Selectors from './components/Selectors';

function App() {
  return (
    /* REQUESITO 01 INSERINDO PROVIDER  */
    <Provider>
      <span className="title">Star Wars Planets</span>
      <FilterNAme />
      <Selectors />
      <Table />
    </Provider>
  );
}

export default App;
