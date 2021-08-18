const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  try {
    const request = await fetch(endpoint);
    const response = await request.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}

export default fetchPlanets;
