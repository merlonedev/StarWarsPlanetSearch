async function fetchApi() {
  const header = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const rawData = await header.json();
  const { results } = rawData;
  return results;
}

export default fetchApi;
