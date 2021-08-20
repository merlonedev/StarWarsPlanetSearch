import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumberFilter() {
  const {
    setFilters,
    filters,
    setFilteredPlanets,
    planetList,
    columnOptions,
    setColumnOptions,
  } = useContext(PlanetsContext);

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

    /**
    * Consultei o repositório de Victor Faria para resolver essa parte.
    * Link: // https://github.com/tryber/sd-011-project-starwars-planets-search/pull/4/files
    */
    const { column } = filters.filterByNumericValues[0];
    const filteredSelect = columnOptions.filter((item) => item !== column);
    setColumnOptions([...filteredSelect]);
  };

  const filterByNumber = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    const newSearch = planetList
      .filter((planet) => {
        if (comparison === 'maior que') return Number(planet[column]) > Number(value);
        if (comparison === 'menor que') return Number(planet[column]) < Number(value);
        if (comparison === 'igual a') return Number(planet[column]) === Number(value);
        return true;
      });
    setFilteredPlanets(newSearch);
  };

  return (
    <form>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {columnOptions
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
