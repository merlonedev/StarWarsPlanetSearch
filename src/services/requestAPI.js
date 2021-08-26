const data = 'https://swapi-trybe.herokuapp.com/api/planets/';
const requestAPI = async () => {
  const results = await fetch(data);
  const response = await results.json();
  return response;
};

export default requestAPI;
