const FetchPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export default FetchPlanets;
