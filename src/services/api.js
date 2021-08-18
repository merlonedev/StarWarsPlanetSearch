const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = async () => {
  const response = await fetch(`${url}`);

  const { results } = await response.json();

  return results;
};

export default fetchApi;
