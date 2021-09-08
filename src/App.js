import React from 'react';
import MyProvider from './Context/MyProvider';
import Table from './Components/componentsTable/Table';
import './App.css';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
