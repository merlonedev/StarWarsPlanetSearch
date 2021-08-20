import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumberFilter() {
  const {
    setFilters,
    filters,
    setFilteredPlanets,
    planetList,
  } = useContext(PlanetsContext);

  const colunmOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparator = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [name]: value,
        },
      ],
    });
  };

  const filterByNumber = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    if (column !== '' && comparison !== '' && value !== '') {
      const newData = planetList
        .filter((planet) => {
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          if (comparison === 'menor que') return Number(planet[column]) < Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          return true;
        });
      setFilteredPlanets(newData);
    }
  };

  return (
    <form>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {colunmOptions
          .map(
            (column) => <option key={ column }>{ column }</option>,
          )}
      </select>
      <select data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
        {comparator
          .map((comparison) => <option key={ comparison }>{ comparison }</option>)}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterByNumber() }
      >
        filtrar
      </button>
    </form>
  );
}

export default NumberFilter;
