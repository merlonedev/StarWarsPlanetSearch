import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

function FilterPlanets() {
  const { filters, setFilters } = useContext(DataContext);
  const { filterByName, filterByNumericValues } = filters;

  const [filterNumeric, setFilterNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    values: 0,
  });
  // console.log(filterByNumericValues);

  const optionsValues = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const filterColumn = filterByNumericValues && filterByNumericValues.length > 0
    ? optionsValues
      .filter((item) => filterByNumericValues.every(({ column }) => item !== column))
    : optionsValues;

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [filterNumeric, ...filterByNumericValues],
    });
  };

  const removeFilters = (currentColumn) => {
    const removeFilterByNumeric = filterByNumericValues
      .filter(({ column }) => column !== currentColumn);
    setFilters({
      ...filters,
      filterByNumericValues: [removeFilterByNumeric],
    });
    // console.log(removeFilterByNumeric);
  };

  // console.log(filterByNumericValues);

  return (
    <div>
      <form>
        <label htmlFor="search-input">
          <input
            data-testid="name-filter"
            type="text"
            name="search-input"
            value={ filterByName.name }
            onChange={ ({ target }) => setFilters({
              ...filters, filterByName: { name: target.value } }) }
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
              <option key={ index } value={ option }>{ option }</option>)) }
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
        { filterByNumericValues.map(({ column, comparison, values }) => (
          <li data-testid="filter" key={ column }>
            { `Filtros: ${column} ${comparison} ${values}` }
            <button
              type="button"
              onClick={ () => removeFilters(column) }
            >
              X

            </button>
          </li>
        )) }
      </form>

    </div>
  );
}

export default FilterPlanets;
