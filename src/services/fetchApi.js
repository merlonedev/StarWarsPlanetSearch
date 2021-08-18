const fetchApi = async () => {
  const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(END_POINT);
  const { results } = await request.json();
  return results;
};

export default fetchApi;
