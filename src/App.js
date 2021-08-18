import React, { useEffect, useState } from 'react';

function App() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint).then((response) => response.json());
      setPlanets(result);
    };
    getPlanets();
  }, []);
  return (
    <span>Hello, App!</span>
  );
}

export default App;
// adding a simple comment
