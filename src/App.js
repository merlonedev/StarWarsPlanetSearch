import React from 'react';
import './App.css';
import Table from './Components/Table';
import PayloadProvider from './Components/PayloadProvider';
import FiltersProvider from './Components/FiltersProvider';
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
