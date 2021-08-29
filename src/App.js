import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import NumericFilters from './components/NumericFilters';
import Provider from './context/MyContextProvider';

const App = () => (
  <section>
    <Provider>
      <Filter />
      <NumericFilters />
      <Table />
    </Provider>
  </section>
);

export default App;
