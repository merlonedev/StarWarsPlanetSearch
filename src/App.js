import React from 'react';
import Filters from './components/Filters';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

const App = () => (
  <AppProvider>
    <Filters />
    <Table />
  </AppProvider>
);

export default App;
