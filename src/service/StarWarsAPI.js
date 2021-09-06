export async function getAllPlanets() {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const response = await fetch(ENDPOINT).then((data) => data.json());
  return response.results;
}

export async function getPlanet(id) {
  const ENDPOINT = `https://swapi-trybe.herokuapp.com/api/planets/${id}/`;

  const response = await fetch(ENDPOINT).then((data) => data.json());
  return response.results;
}
