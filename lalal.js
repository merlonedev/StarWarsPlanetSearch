const storageFilter = ({ target }) => {
  const { value } = target;
  handleSetNumeric(target.id, value);
};

const comparisonValue = (selectedSize) => {
  if (selectedSize === 'maior que') {
    selectedSize = '>';
  } else if (selectedSize === 'menor que') {
    selectedSize = '<';
  } else if (selectedSize === 'igual a') {
    selectedSize = '===';
  } else {
    selectedSize = '';
  }
  return selectedSize;
};

const fixData = (dataFiltred) => {
  const finalData = dataFiltred.map((planet) => planet[0]);
  setState(finalData);
};

const filterData = (filteredSize) => {
  const { filterByNumericValues } = filters;
  const { column } = filterByNumericValues[0];

  let dataFiltered = [];
  switch (column) {
  case 'population':
    dataFiltered = filteredSize.map((filtredValue) => (
      data.filter((planet) => (
        planet.population === filtredValue
      ))
    ));
    break;

  case 'orbital_period':
    dataFiltered = filteredSize.map((filtredValue) => (
      data.filter((planet) => (
        planet.orbital_period === filtredValue
      ))
    ));
    break;

  case 'diameter':
    dataFiltered = filteredSize.map((filtredValue) => (
      data.filter((planet) => (
        planet.diameter === filtredValue
      ))
    ));
    break;

  case 'rotation_period':
    dataFiltered = filteredSize.map((filtredValue) => (
      data.filter((planet) => (
        planet.rotation_period === filtredValue
      ))
    ));
    break;

  case 'surface_water':
    dataFiltered = filteredSize.map((filtredValue) => (
      data.filter((planet) => (
        planet.surface_water === filtredValue
      ))
    ));
    break;

  default: dataFiltered = '';
  }
  fixData(dataFiltered);
};

const filterSize = (findColumn) => {
  const { filterByNumericValues } = filters;
  const { comparison, value } = filterByNumericValues[0];

  let filteredSize = [];

  switch (comparison) {
  case '>':
    filteredSize = findColumn.filter((item) => (
      parseInt(item, 10) !== 'NaN' && parseInt(item, 10) > value
    ));
    break;

  case '<':
    filteredSize = findColumn.filter((item) => (
      parseInt(item, 10) !== 'NaN' && parseInt(item, 10) < value
    ));
    break;

  case '===':
    filteredSize = findColumn.filter((item) => (
      parseInt(item, 10) !== 'NaN' && parseInt(item, 10) === value
    ));
    break;
  default: filteredSize = [];
  }
  filterData(filteredSize);
};

const filterColumn = () => {
  const { filterByNumericValues } = filters;
  const { column } = filterByNumericValues[0];

  let findColumn = [];
  switch (column) {
  case 'population':
    findColumn = data.map((planet) => planet.population);
    break;
  case 'orbital_period':
    findColumn = data.map((planet) => planet.orbital_period);
    break;
  case 'diameter':
    findColumn = data.map((planet) => planet.diameter);
    break;
  case 'rotation_period':
    findColumn = data.map((planet) => planet.rotation_period);
    break;
  case 'surface_water':
    findColumn = data.map((planet) => planet.surface_water);
    break;
  default: findColumn = '';
  }

  filterSize(findColumn);
};