import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import Filters from './components/Filters';

function App() {
  return (
    <StarWarsProvider>
      <section>
        <Filters />
        <Table />
      </section>
    </StarWarsProvider>
  );
}

export default App;
