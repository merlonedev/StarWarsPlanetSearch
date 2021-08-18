import React, { useContext, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import './App.css';
import Table from './Components/Table';

function App() {
  const { data } = useContext(StarWarsContext);

  return (
    <div>
      <header>Star Wars Planets Search</header>
      { data ? <Table /> : <p>LOADING TABLE</p> }
    </div>

  );
}

export default App;
