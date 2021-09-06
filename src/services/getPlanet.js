const getPlanet = async () => {
  const responseApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(responseApi);
  const { results } = await request.json();
  results.forEach((planets) => delete planets.residents);

  return results;
};

export default getPlanet;
