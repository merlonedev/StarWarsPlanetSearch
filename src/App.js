import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table.js';
import Filters from './components/Filters.js';

function App() {
  return (
    <Provider>
      <section className="filters">
        <Filters />
      </section>
      <Table />
    </Provider>
  );
}

export default App;
