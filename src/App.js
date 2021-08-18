import React from 'react';
import './App.css';
import StarProvider from './components/StarProvider';
import Table from './components/Table';

function App() {
  return (
    <StarProvider>
      <Table />
      <span>Hello, App!</span>
    </StarProvider>
  );
}

export default App;
