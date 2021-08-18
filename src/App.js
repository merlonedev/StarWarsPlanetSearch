import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint).then((response) => response.json());
      console.log(result);
    };
    getPlanets();
  }, []);
  return (
    <span>Hello, App!</span>
  );
}

export default App;
// adding a simple comment
