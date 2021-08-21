const fetchAPI = async (setData) => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(URL).then((response) => response.json());

  setData(results);
};

export default fetchAPI;
