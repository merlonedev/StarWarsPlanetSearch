async function getNext(ENDPOINT) {
  const result = [];
  let response = await fetch(ENDPOINT).then((data) => data.json());
  response.results.forEach((element) => result.push(element));
  if (response.next !== null) {
    response = await getNext(response.next);
    response.forEach((element) => result.push(element));
  }
  return result;
}

export async function getAllPlanets() {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await getNext(ENDPOINT);
  console.log(response);
  return response;
}

export async function getPlanet(id) {
  const ENDPOINT = `https://swapi-trybe.herokuapp.com/api/planets/${id}/`;

  const response = await fetch(ENDPOINT).then((data) => data.json());
  return response.results;
}

export async function getPlanetsFirstPage() {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const response = await fetch(ENDPOINT).then((data) => data.json());
  return response.results;
}
