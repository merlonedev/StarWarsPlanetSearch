const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  try {
    const response = await fetch(URL);
    const { results } = await response.json();
    const filter = results.map((item) => {
      delete item.residents;
      return item;
    });
    return filter;
  } catch (error) {
    console.log(error);
  }
}

export default fetchPlanets;
