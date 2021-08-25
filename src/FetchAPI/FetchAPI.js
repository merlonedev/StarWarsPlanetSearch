const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
const fetchAPI = async () => {
  try {
    const request = await fetch(URL);
    const { results } = await request.json();
    results.forEach((planet) => delete planet.residents);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;
