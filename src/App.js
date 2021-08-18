import React from 'react';
import './App.css';
import Table from './Components/Table';
import Provider from './Components/Provider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
