import React from 'react';
import Provider from './context/Provider';
import Filters from './componente/Filters';
import Table from './componente/Table';

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
