import React from 'react';

import Filter from './components/Filter';
import Table from './components/Table';
import Provider from './Provider';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
