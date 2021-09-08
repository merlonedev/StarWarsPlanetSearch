export const tableColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export const comparisonColumns = [
  'maior que',
  'menor que',
  'igual a',
];

export const initialFilterState = {
  filterByName: { name: '' },
  filterByNumericValues: [{ column: '', comparison: '', value: '' }],
};
