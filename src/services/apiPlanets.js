async function fetchPlanets() {
  const URL_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';
  /** Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
  };
  /** Source: https://stackoverflow.com/questions/54163952/async-await-in-fetch-how-to-handle-errors */
  try {
    const response = await fetch(URL_PLANETS, requestOptions);
    if (!response.ok) {
      throw new Error('Bad response from server');
    }
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(`A error just ocurred: ${error}`);
  }
}

export default fetchPlanets;
