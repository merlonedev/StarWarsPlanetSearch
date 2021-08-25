const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function searchPlanets() {
  return (
    fetch(PLANET_API)
    .then((request) => request.json())
    .then(({ results }) => results)
  );
}

export default searchPlanets;
