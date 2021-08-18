// import { results } from '../testData';

const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetsApi() {
  try {
    const response = await fetch(URL_API);
    const json = await response.json();
    const planets = await json.results;
    // console.log(planets);
    // return results;
    if (!planets) throw new Error(json.detail);
    return planets;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default fetchPlanetsApi;
