export default async function fetchAPI() {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
