const fetchAPI = async (setData) => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(URL).then((response) => response.json());

  setData(results);
  console.log(results);
};

export default fetchAPI;
