const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApiHeader = async () => {
  try {
    const request = await fetch(URL);
    const { results } = await request.json();
    results.forEach((e) => delete e.residents);
    return Object.keys(results[0]);
  } catch (error) {
    console.log(error);
  }
};

export default fetchApiHeader;
