import React from 'react';
import './App.css';
import FilterInputs from './components/FilterInputs';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <FilterInputs />
      <Table />
    </Provider>
  );
}

export default App;
