async function getPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const results = await fetch(URL);
    const result = await results.json();
    const sendPlanet = result.results;
    return sendPlanet;
  } catch (e) {
    return encodeURI.message;
  }
}

export default getPlanets;
