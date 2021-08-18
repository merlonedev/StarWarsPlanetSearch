export const requestApi = async () => {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(URL);
    const { results } = await request.json();
    results.forEach((obj) => (
      delete obj.residents
    ));
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const requestKeysApi = async () => {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const requestKeys = await fetch(URL);
    const { results } = await requestKeys.json();
    results.forEach((obj) => (
      delete obj.residents
    ));
    return Object.keys(results[0]);
  } catch (error) {
    console.log(error);
  }
};

requestKeysApi();
