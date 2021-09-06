const setNumericValuesFilter = (planet, filter) => {
  switch (filter.comparison) {
  case 'maior que':
    return planet[filter.column] > filter.value;
  case 'menor que':
    return planet[filter.column] < filter.value;
  case 'igual a':
    return planet[filter.column] === filter.value;
  default: return planet;
  }
};

export default setNumericValuesFilter;
