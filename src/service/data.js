const HEADER_TABLE = [
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

const SELECTION_OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

const SELECTION_RANGE = [
  'maior que', 'menor que', 'igual a',
];

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};
export { HEADER_TABLE, SELECTION_OPTIONS, SELECTION_RANGE, INITIAL_STATE };
