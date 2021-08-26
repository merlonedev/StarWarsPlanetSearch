const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsAPIInfo = async () => {
  const response = await fetch(API_URL);
  const result = await response.json();
  return result;
};

export default getPlanetsAPIInfo;
