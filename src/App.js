import React from 'react';
import './App.css';
import Provider from './context/Provider';
import MainTable from './components/MainTable';

function App() {
  return (
    <Provider>
      <MainTable />
    </Provider>
  );
}

export default App;
