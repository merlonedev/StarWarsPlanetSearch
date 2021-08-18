const fetchPlanets = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  let request = await fetch(endpoint);
  request = await resquest.json();
  return request;
};

export default fetchPlanets;
