import React from 'react';
import MyProvider from './components/MyProvider';
import Table from './components/Table';
import Input from './components/Inputs';

function App() {
  return (
    <MyProvider>
      <Input />
      <Table />
    </MyProvider>
  );
}

export default App;
