async function fetchAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const data = await fetch(url).then((response) => response.json());
  return data;
}

export default fetchAPI;
