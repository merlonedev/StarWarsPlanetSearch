import React from 'react';
import './App.css';
import Provider from './context/Provider';
import MainTable from './components/MainTable';
import InputName from './components/InputName';
import InputNumber from './components/inputNumber';

function App() {
  return (
    <Provider>
      <InputName />
      <InputNumber />
      <MainTable />
    </Provider>
  );
}

export default App;
