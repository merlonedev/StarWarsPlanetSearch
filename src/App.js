import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import PayloadProvider from './context/providers/PayloadProvider';
import FiltersProvider from './context/providers/FiltersProvider';

function App() {
  return (
    <FiltersProvider>
      <Filters />
      <PayloadProvider>
        <Table />
      </PayloadProvider>
    </FiltersProvider>
  );
}

export default App;
