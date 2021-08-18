const fetchApi = async () => {
  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(urlApi);
  const result = await response.json();
  return result;
};
export default fetchApi;
