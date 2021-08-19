import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Table from './Components/Table';
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <header className="appHeader">
          <h1>Star Wars Planets Search</h1>
        </header>
        <SearchForm />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
