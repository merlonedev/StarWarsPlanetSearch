import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <span>oi, App!</span>
      <Table />
    </Provider>
  );
}

export default App;
