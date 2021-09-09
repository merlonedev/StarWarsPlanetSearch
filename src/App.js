import Filters from './components/Filters';
import Table from './components/Table';
import React from 'react';
import Provider from './context/Provider';

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
