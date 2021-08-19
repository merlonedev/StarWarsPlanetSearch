import React from 'react';
import Provider from './context/Provider';
import CreateTable from './pages/CreateTable';
import './App.css';
// Comite inicial

function App() {
  return (
    <Provider>
      <CreateTable />
    </Provider>

  );
}

export default App;
