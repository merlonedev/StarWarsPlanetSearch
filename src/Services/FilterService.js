const FilterService = (arrayindex, value, originalArray) => {
  originalArray[arrayindex] = value;
  return [...originalArray];
};

export const filteringcolum = (numbertoindentify, reference) => {
  if (reference === 'coluna') {
    if (numbertoindentify === 'population') return 'population';
    if (numbertoindentify === 'orbital_period') return 'orbital_period';
    if (numbertoindentify === 'diameter') return 'diameter';
    if (numbertoindentify === 'rotation_period') return 'rotation_period';
    if (numbertoindentify === 'surface_water') return 'surface_water';
  }
};

export const UsedFilter = (text, array) => {
  const indexofsamestring = -1;
  const newarray = array.filter((n) => n.indexOf(text) !== indexofsamestring);
  if (newarray.length === 1) {
    return [...array];
  }
  array.push(text);
  return [...array];
};

export const filteringoperator = (numbertoindentify, reference) => {
  if (reference === 'operador') {
    if (numbertoindentify === 'maior que') return 'maior que';
    if (numbertoindentify === 'menor que') return 'menor que';
    if (numbertoindentify === 'igual a') return 'igual a';
  }
};

export const newFilter = (array, arrayfilter) => {
  if (!array) return null;
  if (!arrayfilter) return null;
  const filter = filteringcolum(arrayfilter[0], 'coluna');
  const operator = filteringoperator(arrayfilter[1], 'operador');
  if (operator === 'igual a') {
    const newarray = array
      .filter((n) => parseInt(n[filter], 10) === parseInt(arrayfilter[2], 10));
    return [...newarray];
  }
  if (operator === 'maior que') {
    const newarray = array
      .filter((n) => parseInt(n[filter], 10) > parseInt(arrayfilter[2], 10));
    return [...newarray];
  }
  if (operator === 'menor que') {
    const newarray = array
      .filter((n) => parseInt(n[filter], 10) < parseInt(arrayfilter[2], 10));
    return [...newarray];
  }
};

export default FilterService;
