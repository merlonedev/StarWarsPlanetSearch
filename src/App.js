import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Table from './Components/Table';
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <header>Star Wars Planets Search</header>
        <SearchForm />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
