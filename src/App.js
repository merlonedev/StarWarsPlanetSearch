import React from 'react';
import SWProvider from './context/SWProvider';
import Table from './components/Table';
import './App.css';
import Filters from './components/Filters';

function App() {
  return (
    <SWProvider>
      <Filters />
      <Table />
    </SWProvider>
  );
}

export default App;
