import { useState, useEffect } from 'react';

const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function usePlanets() {
  const [planets, setPlanets] = useState({ results: [] });

  function removeResidents(data) {
    data.results = data.results.map((planet) => {
      delete planet.residents;
      return planet;
    });
    setPlanets(data);
  }

  function getPlanets() {
    if (planets.results.length === 0) {
      fetch(API).then((response) => response.json())
        .then((data) => removeResidents(data))
        .catch(console.error);
    }
  }

  useEffect(getPlanets);

  return [planets];
}

export default usePlanets;
