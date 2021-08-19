const fetchPlanets = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  let request = await fetch(endpoint);
  request = await request.json();
  return request;
};

export default fetchPlanets;
