const planetsApiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  const response = await fetch(planetsApiUrl);
  const { results } = await response.json();
  return results;
}

export default fetchPlanets;
