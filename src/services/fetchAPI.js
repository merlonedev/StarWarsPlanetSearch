const fetchAPI = async () => {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const { results } = await response.json();
    results.forEach((planet) => delete planet.residents);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;
