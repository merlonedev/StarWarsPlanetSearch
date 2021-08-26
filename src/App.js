import React from 'react';
import './App.css';
import Provider from './context/myprovider';
import Table from './components/Table';
import Inputsearch from './components/Inputsearch';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <Provider>
      <div>
        <h1>Que a força esteja com vocês!</h1>
        <Inputsearch />
        <FilterNumber />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
