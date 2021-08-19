import React from 'react';
import './App.css';
import InputFilter from './components/InputFilter';
import SelectFilter from './components/SelectFilter';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <h2>Project Starwars Planets Search</h2>
      <div>
        <h4>Planets Seacrh</h4>
        <InputFilter />
        <SelectFilter />
      </div>
      <Table />
    </Provider>
  );
}

export default App;
