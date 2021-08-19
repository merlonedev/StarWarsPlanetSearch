import React from 'react';

import Filter from './components/Filter';
import Table from './components/Table';

import usePlanets from './hooks/usePlanets';

function App() {
  const [planets, setPlanets] = usePlanets();
  return (
    <div>
      <Filter planets={ planets } setPlanets={ setPlanets } />
      <Table planets={ planets } />
    </div>
  );
}

export default App;
