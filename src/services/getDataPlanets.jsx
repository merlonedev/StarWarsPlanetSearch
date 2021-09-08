async function getDataPlanets() {
  const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
  };

  try {
    const response = await fetch(URL_API, requestOptions);
    const { results } = await response.json();
    return results;
  } catch (err) {
    console.log(err);
  }
}

export default getDataPlanets;
