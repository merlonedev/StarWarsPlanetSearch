import { useState, useEffect } from 'react';

const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function usePlanets() {
  const [planets, setPlanets] = useState({ results: [] });

  function getPlanets() {
    if (planets.results.length === 0) {
      fetch(API).then((response) => response.json())
        .then((data) => setPlanets(data))
        .catch(console.error);
    }
  }

  useEffect(getPlanets);

  return [planets, setPlanets];
}

export default usePlanets;
