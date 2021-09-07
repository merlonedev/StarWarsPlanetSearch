export function columnCase(column) {
  let myCase = '';
  switch (column) {
  case 'population':
    myCase = '1';
    break;
  case 'orbital_period':
    myCase = '2';
    break;
  case 'diameter':
    myCase = '3';
    break;
  case 'rotation_period':
    myCase = '4';
    break;
  case 'surface_water':
    myCase = '5';
    break;
  default:
  }
  return myCase;
}

export function comparisonCase(comparison) {
  let myCase = '';
  switch (comparison) {
  case 'maior que':
    myCase = myCase.concat('1');
    break;
  case 'menor que':
    myCase = myCase.concat('2');
    break;
  case 'igual a':
    myCase = myCase.concat('3');
    break;
  default:
  }
  return myCase;
}

export function myCaseSwitch(myCase, planets, value) {
  let myPlanets = [];
  console.log(myCase);
  switch (myCase) {
  case '11':
    myPlanets = planets.filter((element) => element.population > parseInt(value, 10));
    break;
  case '12':
    myPlanets = planets.filter((planet) => planet.population < parseInt(value, 10));
    break;
  case '13':
    myPlanets = planets.filter((planet) => planet.population === value);
    break;
  case '21':
    myPlanets = planets.filter((planet) => planet.orbital_period > parseInt(value, 10));
    break;
  case '22':
    myPlanets = planets.filter((planet) => planet.orbital_period < parseInt(value, 10));
    break;
  case '23':
    myPlanets = planets.filter((planet) => planet.orbital_period === value);
    break;
  case '31':
    myPlanets = planets.filter((planet) => planet.diameter > parseInt(value, 10));
    break;
  case '32':
    myPlanets = planets.filter((planet) => planet.diameter < parseInt(value, 10));
    break;
  case '33':
    myPlanets = planets.filter((planet) => planet.diameter === value);
    break;
  default:
  }
  console.log(myPlanets);
  return myPlanets;
}

export function filterByName(name, planets, setPlanets) {
  setPlanets(planets.filter((element) => element.name.toLowerCase().includes(name)));
}

export function filterByNumber(number, planets, setPlanets) {
  const { column, comparison, value } = number;
  const myCase = columnCase(column).concat(comparisonCase(comparison));
  let myPlanets = myCaseSwitch(myCase, planets, value);

  if (myPlanets === []) {
    switch (myCase) {
    case '41':
      myPlanets = planets.filter(
        (planet) => planet.rotation_period > parseInt(value, 10),
      );
      break;
    case '42':
      myPlanets = planets.filter(
        (planet) => planet.rotation_period < parseInt(value, 10),
      );
      break;
    case '43':
      myPlanets = planets.filter((planet) => planet.rotation_period === value);
      break;
    case '51':
      myPlanets = planets.filter((planet) => planet.surface_water > parseInt(value, 10));
      break;
    case '52':
      myPlanets = planets.filter((planet) => planet.surface_water < parseInt(value, 10));
      break;
    case '53':
      myPlanets = planets.filter((planet) => planet.surface_water === value);
      break;
    default:
    }
  }
  setPlanets(myPlanets);
}
