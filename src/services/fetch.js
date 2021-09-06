const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  try {
    const response = await fetch(URL);
    const { result } = await response.json();
    const filter = result.map((item) => {
      delete item.residents;
      return item;
    });
    return filter;
  } catch (error) {
    console.log(error);
  }
}

export default fetchPlanets;
