const Api = async () => {
  const get = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const getJson = await get.json();
  return getJson.results.filter((result) => delete result.residents);
};

export default Api;
