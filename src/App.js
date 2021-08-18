import React from 'react';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

const App = () => (
  <AppProvider>
    <Table />
  </AppProvider>
);
export default App;
