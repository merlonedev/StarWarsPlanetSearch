import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import NumericFilter from './components/NumericFilter';
import NewProvider from './context/MyContext';

function App() {
  return (
    <div>
      <NewProvider>
        <NumericFilter />
        <Filters />
        <Table />
      </NewProvider>
    </div>
  );
}

export default App;
