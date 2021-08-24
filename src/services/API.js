async function requestAPI() {
  const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await results.json();
  return data;
}

export default requestAPI;
