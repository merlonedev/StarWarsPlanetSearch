const FetchApi = async (planetState) => {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(URL).then((r) => r.json());
    planetState(results);
  } catch (erro) {
    return erro;
  }
};
export default FetchApi;
