import React, { useContext, useState } from 'react';
import Context from '../context/Context';

export default function SearchBar() {
  const { setFilters, filters } = useContext(Context);

  const [filterOptions, setFilterOptions] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const menosUm = -1;

  const newFilter = {
    column: filterOptions[0],
    comparison: filters.filterByNumericValues.slice(menosUm)[0].comparison,
    value: 0,
  };

  const numberFilters = {
    filterByNumericValues: filters.filterByNumericValues,
  };

  const setColumn = (value) => {
    numberFilters.filterByNumericValues.slice(menosUm)[0].column = value;
    newFilter.column = value;
  };

  const setComparison = (value) => {
    numberFilters.filterByNumericValues.slice(menosUm)[0].comparison = value;
    newFilter.comparison = value;
  };

  const setValue = (value) => {
    numberFilters.filterByNumericValues.slice(menosUm)[0].value = parseFloat(value);
    newFilter.value = parseFloat(value);
  };

  const handleChangeName = (event) => {
    const { value } = event.target;
    const newFilters = { filterByName: { name: value } };
    setFilters({ ...filters, ...newFilters });
  };

  const handleClick = () => {
    setFilters({ ...filters, ...numberFilters });
    numberFilters.filterByNumericValues.push(newFilter);

    setFilterOptions(filterOptions.filter((filter) => filter !== numberFilters
      .filterByNumericValues.slice(menosUm)[0].column));
  };

  return (
    <div>
      <input type="text" onChange={ handleChangeName } data-testid="name-filter" />

      <select
        id="columnFilter"
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {
          filterOptions.map((option, index) => (
            <option value={ option } key={ index }>
              { option }
            </option>))
        }

      </select>

      <select
        name="comparisonFilter"
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setValue(value) }
      />

      <button type="button" onClick={ handleClick } data-testid="button-filter">+</button>

      <button type="button" onClick={ () => console.log(filters) }>Logar filtros</button>
    </div>
  );
}
