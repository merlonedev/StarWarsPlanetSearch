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

export const orderColumns = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'terrain',
  'surface_water',
  'population',
];

export const initialFilterState = {
  filterByName: { name: '' },
  filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  order: { column: 'name', sort: 'ASC' },
};
