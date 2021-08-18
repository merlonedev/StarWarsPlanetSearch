async function planetsFetch() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await response.json();
  return json;
}

export default planetsFetch;
