const API = 'https://swapi-trybe.herokuapp.com/api/ĺanets/';

const requisitionPlanets = () => (
  fetch(API)
    .then((response) => (response.json()
      .then((json) => (response.ok
        ? Promise.resolve(json)
        : Promise.reject(new Error('erro da api'))))
    ))
);

export default requisitionPlanets;
