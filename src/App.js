import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import Provider from './Context/Provider';
import Table from './components/Table';
import FilterByValues from './components/FilterByValue';

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
