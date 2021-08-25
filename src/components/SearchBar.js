import React, { useContext } from 'react';
import Context from '../context/Context';

export default function SearchBar() {
  const { setFilters, filters } = useContext(Context);

  const filterOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const numberFilters = {
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  };

  const setColumn = (value) => {
    numberFilters.filterByNumericValues[0].column = value;
  };

  const setComparison = (value) => {
    numberFilters.filterByNumericValues[0].comparison = value;
  };

  const setValue = (value) => {
    numberFilters.filterByNumericValues[0].value = parseFloat(value);
  };

  const handleChangeName = (event) => {
    const { value } = event.target;
    const newFilters = { filterByName: { name: value } };
    setFilters({ ...filters, ...newFilters });
  };

  const handleClick = () => {
    setFilters({ ...filters, ...numberFilters });
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
