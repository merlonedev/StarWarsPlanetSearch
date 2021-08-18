const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
const FetchPlanets = async () => {
  let result = await fetch(API);
  result = await result.json();
  return result;
};

export default FetchPlanets;
