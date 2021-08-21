const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
const getApi = async () => {
  const results = await fetch(END_POINT);
  const response = await results.json();
  return response;
};

export default getApi;
