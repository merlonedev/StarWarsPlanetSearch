import React from 'react';
import './App.css';
import Provider from './context/Provider';
import MainTable from './components/MainTable';
import InputName from './components/InputName';

function App() {
  return (
    <Provider>
      <InputName />
      <MainTable />
    </Provider>
  );
}

export default App;
