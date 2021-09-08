import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import NumberFilters from './components/NumberFilters';
import Provider from './context/Provider';

const App = () => (
  <section>
    <Provider>
      <Filter />
      <NumberFilters />
      <Table />
    </Provider>
  </section>
);

export default App;
