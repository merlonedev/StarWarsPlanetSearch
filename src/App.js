import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Table from './Components/Table';
import Filters from './Components/Filters';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <header className="appHeader">
          <h1>Star Wars Planets Search</h1>
        </header>
        <Filters />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
