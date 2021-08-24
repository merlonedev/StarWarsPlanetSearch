const FetchApi = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const results = await fetch(URL);
  const obj = await results.json();
  return obj;
};

export default FetchApi;
