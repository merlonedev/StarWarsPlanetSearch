import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <h1 className="App">StarWars - Planets</h1>
      <Provider>
        <Filters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
