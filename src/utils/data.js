export const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export const comparisonMethods = [
  'maior que',
  'menor que',
  'igual a',
];

const MINUS_ONE = -1;

export const switchComparison = (planet, column, comparison, value) => {
  switch (comparison) {
  case comparisonMethods[0]:
    return (planet[column] > +value);
  case comparisonMethods[1]:
    return (planet[column] < +value);
  case comparisonMethods[2]:
    return (planet[column] === value);
  default:
    return null;
  }
};

export const sortASC = (a, b, column) => {
  if (!Number.isNaN(+a[column])) {
    if (+a[column] > +b[column]) return 1;
    if (+a[column] < +b[column]) return MINUS_ONE;
  }
  if (Number.isNaN(+a[column])) {
    if (a[column] > b[column]) return 1;
    if (a[column] < b[column]) return MINUS_ONE;
  }
  return 0;
};

export const sortDESC = (a, b, column) => {
  if (!Number.isNaN(+a[column])) {
    if (+a[column] < +b[column]) return 1;
    if (+a[column] > +b[column]) return MINUS_ONE;
  }
  if (Number.isNaN(+a[column])) {
    if (a[column] < b[column]) return 1;
    if (a[column] > b[column]) return MINUS_ONE;
  }
  return 0;
};
