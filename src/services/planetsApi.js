const STAR_WARS_PLANETS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  try {
    const response = await fetch(STAR_WARS_PLANETS_ENDPOINT);
    return (response.ok ? Promise.resolve(response) : Promise.reject(response.status));
  } catch (error) {
    console.log(error);
  }
};

export default getPlanets;
