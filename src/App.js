import React from 'react';
import './App.css';
import Provider from './ContextAPI/Provider';
import Table from './Components/Table';
import FilterInputs from './Components/FilterInputs';

function App() {
  return (
    <Provider>
      <FilterInputs />
      <Table />
    </Provider>
  );
}

export default App;
