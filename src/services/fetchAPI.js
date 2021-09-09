export const fetchAPI = async () => {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNoResidents = async (fetch) => {
  const data = fetch.forEach((planet) => delete planet.residents);
  return data;
};
