import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  return (
    // O Provider tem que estar no App.js
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
