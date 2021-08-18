import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import Provider from './provider/Provider';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
