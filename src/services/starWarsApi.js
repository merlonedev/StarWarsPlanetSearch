const BASE_URL = 'https://swapi-trybe.herokuapp.com/api';

export default function getPlanets() {
  return fetch(`${BASE_URL}/planets`).then((r) => (
    r.ok ? r.json() : Promise.reject(new Error('Api error'))
  ));
}
