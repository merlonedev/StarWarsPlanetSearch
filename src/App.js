import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import Table from './components/Table';
import FilterByValues from './components/FilterByValue';
import StarWarsProvider from './Context/StarWarsProvider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <FilterByName />
        <FilterByValues />
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
