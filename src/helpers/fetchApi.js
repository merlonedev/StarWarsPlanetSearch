async function usePlanets() {
  const defaultURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const require = await fetch(defaultURL);
  const data = await require.json();
  const result = data.results;
  result.map((item) => delete item.residents);
  return result;
}

export default usePlanets;
