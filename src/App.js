import React from 'react';
import SWProvider from './context/SWProvider';
import Table from './components/Table';
// import Input from './components/Input';
import './App.css';

function App() {
  return (
    <SWProvider>
      <Table />
    </SWProvider>
  );
}

export default App;
