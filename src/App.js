import React from 'react';
import './App.css';
import InputFilter from './components/InputFilter';
import SelectFilter from './components/SelectFilter';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <span>Project Starwars Planets Search</span>
      <InputFilter />
      <SelectFilter />
      <Table />
    </Provider>
  );
}

export default App;
