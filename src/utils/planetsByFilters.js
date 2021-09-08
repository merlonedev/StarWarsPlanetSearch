const planetsByFilters = ({ planets, filters }) => planets.filter((planet) => {
  if (filters.filterByName && filters.filterByName.name
    && filters.filterByName.name.length > 0) {
    return planet.name.includes(filters.filterByName.name);
  }

  let comparingPlanets = true;
  filters.filterByNumericValues.forEach(({ column, comparison, value }) => {
    switch (comparison) {
    case 'maior que':
      comparingPlanets = comparingPlanets && Number(planet[column]) > Number(value);
      break;
    case 'menor que':
      comparingPlanets = comparingPlanets && Number(planet[column]) < Number(value);
      break;
    case 'igual a':
      comparingPlanets = comparingPlanets && Number(planet[column]) === Number(value);
      break;
    default:
      comparingPlanets = false;
    }
  });
  return comparingPlanets;
});

export default planetsByFilters;
