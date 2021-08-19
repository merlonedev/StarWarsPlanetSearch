const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getPlanets() {
  try {
    const results = await fetch(API);
    const data = await results.json();
    const clearResidents = data.results.map((planet) => {
      delete planet.residents;
      return planet;
    });
    return clearResidents;
  } catch (error) {
    return error.message;
  }
}
