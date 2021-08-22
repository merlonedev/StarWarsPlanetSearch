import React from 'react';

import Provider from './Provider';
import Filter from './components/Filter';
import Table from './components/Table';

import useFilter from './hooks/useFilter';
import usePlanets from './hooks/usePlanets';

function App() {
  const [planets] = usePlanets();
  const [filters, result, setFilter] = useFilter(planets);

  const state = {
    Planets: [planets],
    Filter: [filters, result, setFilter],
  };

  return (
    <Provider value={ state }>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
