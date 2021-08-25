import React from 'react';
import './App.css';
import Provider from './context/Provider';

import Table from './components/Table/index';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
