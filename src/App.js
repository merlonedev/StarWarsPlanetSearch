import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import Table from './components/Table';
import FilterByValues from './components/FilterByValue';
import Provider from './Context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <FilterByName />
        <FilterByValues />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
