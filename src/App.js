import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import NewProvider from './context/MyContext';

function App() {
  return (
    <div>
      <NewProvider>
        <Filters />
        <Table />
      </NewProvider>
    </div>
  );
}

export default App;
