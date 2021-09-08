// const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
const endpoint = 'https://swapi.dev/api/planets';
const fetchAPI = () => (
  fetch(endpoint)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))

);

export default fetchAPI;
