import React from 'react';
import MyProviderr from './components/MyProvider';
import Table from './components/Table';

function App() {
  return (
    <MyProviderr>
      <Table />
    </MyProviderr>
  );
}

export default App;
