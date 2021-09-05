import React from 'react';
import './App.css';
import Table from './Components/Table';
import PayloadProvider from './context/providers/PayloadProvider';
import FiltersProvider from './context/providers/FiltersProvider';
import Filters from './Components/Filters';

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
