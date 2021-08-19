export const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
];

export const comparisonMethods = [
  'maior que',
  'menor que',
  'igual a',
];

export const switchComparison = (planet, column, comparison, value) => {
  switch (comparison) {
  case comparisonMethods[0]:
    return planet[column] > value;
  case comparisonMethods[1]:
    return planet[column] < value;
  case comparisonMethods[2]:
    return planet[column] === value;
  default:
    return null;
  }
};
