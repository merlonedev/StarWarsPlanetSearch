import React from 'react';
import Filters from './components/Filters';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <h1 className="Title-h1">Starwars Planets</h1>
        <Filters />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
