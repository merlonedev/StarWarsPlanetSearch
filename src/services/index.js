const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const response = await fetch(PLANETS_API);
  let results = await response.json();
  results = Object.values(results.results);
  results = results.map((planet) => {
    delete planet.residents;
    return planet;
  });
  return results;
};

export default fetchPlanets;
