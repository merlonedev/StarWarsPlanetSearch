import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Inputs from './components/Inputs';

function App() {
  return (
    // O Provider tem que estar no App.js
    <Provider>
      <Inputs />
      <Table />
    </Provider>
  );
}

export default App;
