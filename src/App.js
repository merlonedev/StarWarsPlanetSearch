import React from 'react';
import MyProvider from './components/MyProvider';
import Table from './components/Table';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
