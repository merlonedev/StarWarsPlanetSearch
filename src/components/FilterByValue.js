import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

export default function FilterByValues() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [values, setValues] = useState(0);
  const { filters, setFilters } = useContext(StarWarsContext);

  const sendFilterByValue = (event) => {
    event.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value: values }] });
  };

  const handleColumn = (event) => {
    const { value } = event.target;
    setColumn(value);
  };
  const handleComparison = (event) => {
    const { value } = event.target;
    setComparison(value);
  };

  const handleValues = (event) => {
    const { value } = event.target;
    setValues(value);
  };

  const appliedFilters = filters.filterByNumericValues.map((el) => el.column);
  let filtersLabels = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  appliedFilters.forEach((filter) => {
    filtersLabels = filtersLabels.filter((label) => label !== filter);
  });

  const removeFilter = (event) => {
    const { name } = event.target;
    console.log(name);
    const filtersAux = { ...filters };
    filtersAux.filterByNumericValues = filtersAux
      .filterByNumericValues.filter((el) => el.column !== name);
    setFilters(filtersAux);
  };

  return (
    <div>
      <form onSubmit={ sendFilterByValue }>
        <label htmlFor="filterByValues">
          Filter by Column
          {' '}
          <select
            name="filterByValues"
            onChange={ handleColumn }
            data-testid="column-filter"
          >
            {filtersLabels.map((label) => (
              <option
                key={ label }
                value={ label }
              >
                {label}
              </option>))}
          </select>
        </label>
        <select
          name="filterByComparison"
          onChange={ handleComparison }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          type="number"
          name="values"
          onChange={ handleValues }
          data-testid="value-filter"
        />
        <button
          type="submit"
          onClick={ sendFilterByValue }
          data-testid="button-filter"
        >
          Filter
        </button>
      </form>
      {filters.filterByNumericValues.map((filter, index) => (
        <div key={ index } data-testid="filter">
          <p>
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
          </p>
          <button
            type="button"
            key={ filter.column }
            name={ filter.column }
            onClick={ removeFilter }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
