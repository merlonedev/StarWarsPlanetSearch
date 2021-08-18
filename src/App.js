import React from 'react';
import Table from './components/Table';
import Provider from './context/ContextProvider';
import './App.css';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
