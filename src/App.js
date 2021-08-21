import React, {useEffect, useState} from 'react';
import Table from './Components/Table';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const Fetchapi = async () => {
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const { results } = await fetch(URL).then((r) => r.json());
        setPlanets(results)
    }
    Fetchapi();
}, []);

  return (
    <div>
      <span>Hello, App!</span>
      <Table planets={planets} />
      <ul>
      {console.log(planets)}
      {planets.map((planet) => <li key={planet.name}>{planet.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
