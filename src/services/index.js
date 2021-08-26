const fetchAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const results = await response.json();
  const array = Object.values(results.results);
  const planets = array.map((planet) => {
    delete planet.residents;
    return planet;
  });
  return planets;
};

export default fetchAPI;
