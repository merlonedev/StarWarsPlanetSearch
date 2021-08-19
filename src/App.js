import React from 'react';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  return (
    <ContextProvider>
      <section>
        <Filters />
        <Table />
      </section>
    </ContextProvider>
  );
}

export default App;
