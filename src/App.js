import React from 'react';
import Provider from './context/Provider';
import Filters from './Components/Filters';
import Table from './Components/Table';

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
