const optionsComparison = [
  'maior que',
  'igual a',
  'menor que',
];

const switchComparison = (planet, column, comparison, value) => {
  switch (comparison) {
  case optionsComparison[0]:
    return (+planet[column] > +value);
  case optionsComparison[1]:
    return (+planet[column] === +value);
  case optionsComparison[2]:
    return (+planet[column] < +value);
  default:
    return null;
  }
};

export default switchComparison;
