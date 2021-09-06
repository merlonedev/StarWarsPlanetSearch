const setNumericValuesFilter = (planet, filter) => {
  switch (filter.comparison) {
  case 'maior que':
    return parseInt(planet[filter.column], 10) > parseInt(filter.value, 10);
  case 'menor que':
    return parseInt(planet[filter.column], 10) < parseInt(filter.value, 10);
  case 'igual a':
    return parseInt(planet[filter.column], 10) === parseInt(filter.value, 10);
  default: return planet;
  }
};

export default setNumericValuesFilter;
