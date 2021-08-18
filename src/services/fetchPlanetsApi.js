const fetchPlanetsApi = async () => {
  const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const data = await fetch(END_POINT);
  const { results } = await data.json();
  return results;
};

export default fetchPlanetsApi;
