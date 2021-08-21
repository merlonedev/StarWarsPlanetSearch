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
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterByNumericValues[0];

  const handleChange = ({ target: { name, value: number } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filterByNumericValues[0],
          [name]: number,
        },
      ],
    });

    /**
     * Consultei o repositório de Victor Faria para resolver essa parte.
     * Link: // https://github.com/tryber/sd-011-project-starwars-planets-search/pull/4/files
     */
    const filteredSelect = columnOptions.filter((item) => item !== column);
    setColumnOptions([...filteredSelect]);
  };

  const filterByNumber = () => {
    const newSearch = planetList
      .filter((planet) => {
        if (comparison === 'maior que') return Number(planet[column]) > Number(value);
        if (comparison === 'menor que') return Number(planet[column]) < Number(value);
        if (comparison === 'igual a') return Number(planet[column]) === Number(value);
        return true;
      });
    setFilteredPlanets(newSearch);
  };

  const removeFilter = (selected) => {
    const filtered = filterByNumericValues.filter((stored) => stored !== selected);
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filtered,
        },
      ],
    });
  };

  return (
    <form>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {columnOptions
          .map(
            (col) => <option key={ col }>{ col }</option>,
          )}
      </select>
      <select data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
        {comparator
          .map((comp) => <option key={ comp }>{ comp }</option>)}
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
      {filterByNumericValues && filterByNumericValues.map((selected) => (
        <div key={ selected } data-testid="filter">
          {selected.column}
          <button
            type="button"
            data-testid="filter"
            onClick={ () => removeFilter(selected) }
          >
            X
          </button>
        </div>
      ))}
    </form>
  );
}

export default NumberFilter;
