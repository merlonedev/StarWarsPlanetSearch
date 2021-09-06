import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

function FilterPlanets() {
  const { filter, setFilter } = useContext(DataContext);
  const { filters: { filterByName, filterByNumericValues } } = filter;

  const [filterNumeric, setFilterNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    values: 0,
  });

  const optionsValues = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const filterColumn = filterByNumericValues.length > 0
    ? optionsValues
      .filter((item) => filterByNumericValues.every(({ column }) => item !== column))
    : optionsValues;

  const handleClick = () => {
    setFilter({
      ...filter,
      filterByNumericValues: filterByNumericValues.push(filterNumeric),
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="search-input">
          <input
            data-testid="name-filter"
            type="text"
            name="search-input"
            value={ filterByName.name }
            onChange={ ({ target }) => setFilter({
              ...filter, filters: { filterByName: { name: target.value } } }) }
            placeholder="search"
          />
        </label>
        <label htmlFor="filter-column">
          <select
            name="filter-column"
            id="filter-column"
            data-testid="column-filter"
            value={ filterNumeric.column }
            onChange={ ({ target }) => setFilterNumeric({
              ...filterNumeric, column: target.value }) }
          >
            { filterColumn.map((option, index) => (
              <option key={ index }>{ option }</option>)) }
          </select>
        </label>
        <label htmlFor="filter-comparison">
          <select
            data-testid="comparison-filter"
            value={ filterNumeric.comparison }
            onChange={ ({ target }) => setFilterNumeric({
              ...filterNumeric, comparison: target.value }) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="filter-value">
          <input
            data-testid="value-filter"
            type="number"
            placeholder="number"
            value={ filterNumeric.values }
            onChange={ ({ target }) => setFilterNumeric({
              ...filterNumeric, values: target.value }) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>

    </div>
  );
}

export default FilterPlanets;
