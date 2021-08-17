import React from 'react';
import Table from './components/Table';
import MyProvider from './Context';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
