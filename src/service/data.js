const headerTable = [
  'Name',
  'Rotation period',
  'Orbital period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'Url',
];

const selectOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

const range = [
  'maior que', 'menor que', 'igual a',
];

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  },
};
export { headerTable, selectOptions, range, INITIAL_STATE };
