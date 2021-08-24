import React from 'react';
import './App.css';
import StarsProvider from './context/StarsProvider';
import Table from './components/Table';

function App() {
  return (
    <StarsProvider>
      <span>Star Wars Planets</span>
      <Table />
    </StarsProvider>
  );
}

export default App;
