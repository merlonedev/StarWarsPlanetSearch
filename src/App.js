import React from 'react';
import './App.css';
import Provider from './context/Provider';

import Table from './components/Table/index';
import Filters from './components/Filters';
import Sorter from './components/Filters/AscDesc';

function App() {
  return (
    <Provider>
      <Filters />
      <Sorter />
      <Table />
    </Provider>
  );
}

export default App;
