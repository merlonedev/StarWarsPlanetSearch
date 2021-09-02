import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import Provider from './Context/Provider';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Provider>
        <FilterByName />
        <Table />
      </Provider>

    </div>

  );
}

export default App;
