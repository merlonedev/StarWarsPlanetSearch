import React from 'react';
import './App.css';
import InputFilter from './components/InputFilter';
import SelectFilter from './components/SelectFilter';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <h1>Project Starwars Planets Search</h1>
      <div>
        <h2>Planets Seacrh</h2>
        <InputFilter />
        <SelectFilter />
      </div>
      <Table />
    </Provider>
  );
}

export default App;
