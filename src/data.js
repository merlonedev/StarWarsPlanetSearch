const options = {
  allColumns: [
    { name: 'name' },
    { name: 'rotation_period' },
    { name: 'orbital_period' },
    { name: 'diameter' },
    { name: 'climate' },
    { name: 'gravity' },
    { name: 'climaterrainte' },
    { name: 'surface_water' },
    { name: 'population' },
    { name: 'films' },
    { name: 'created' },
    { name: 'edited' },
    { name: 'url' },
  ],
  columnFilter: [
    { name: 'population' },
    { name: 'orbital_period' },
    { name: 'diameter' },
    { name: 'rotation_period' },
    { name: 'surface_water' },
  ],
  comparisonFilter: [
    { name: 'maior que' },
    { name: 'menor que' },
    { name: 'igual a' },
  ],
};

export default options;
