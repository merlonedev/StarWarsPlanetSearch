const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsAPIInfo = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    const planets = await json.results;
    if (!planets) throw new Error(json.detail);
    return planets;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getPlanetsAPIInfo;
