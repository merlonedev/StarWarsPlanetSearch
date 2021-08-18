const FetchPlanets = async () => {
  let request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  request = await request.json();
  return request;
};

export default FetchPlanets;
