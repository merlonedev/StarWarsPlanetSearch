const ApiStarWars = async () => {
  try {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(endpoint);
    const { results } = await request.json();
    results.forEach((planets) => delete planets.residents);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default ApiStarWars;
