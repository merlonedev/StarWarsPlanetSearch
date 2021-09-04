const FilterService = (arrayindex, value, originalArray) => {
  originalArray[arrayindex] = value;
  return originalArray;
};

export const filteringcolum = (numbertoindentify, reference) => {
  if (reference === 'coluna') {
    if (numbertoindentify === '1') return 'population';
    if (numbertoindentify === '2') return 'orbital_period';
    if (numbertoindentify === '3') return 'diameter';
    if (numbertoindentify === '4') return 'rotation_period';
    if (numbertoindentify === '5') return 'surface_water';
  }
};

export const filteringoperator = (numbertoindentify, reference) => {
  if (reference === 'operador') {
    if (numbertoindentify === '1') return 'maior que';
    if (numbertoindentify === '2') return 'menor que';
    if (numbertoindentify === '3') return 'igual';
  }
};

export default FilterService;
