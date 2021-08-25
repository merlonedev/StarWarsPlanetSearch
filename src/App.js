import React from 'react';
import './App.css';
import Provider  from '../src/context/Provider';
import Table from '../src/table/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
