import React, { useContext, useEffect, useState } from 'react';
import FilterContext from '../context/FilterContext';

function Header() {
  const columnOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const { addFilter, rmvFilter, handleOrder, setName,
    data: { tableHeadData },
    filters: { filterByNumericValues, filterByName: { name } },
  } = useContext(FilterContext);

  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState('');
  const [sortColumn, setSortColumn] = useState('name');
  const [sortOrder, setsortOrder] = useState('ASC');

  const availableColumns = columnOptions.filter((option) => !filterByNumericValues
    .map((item) => item.column).includes(option));

  const handleFilter = () => {
    if (number) {
      addFilter({ column, comparison, value: number });
    }
  };

  const firstColumn = () => setColumn(availableColumns[0]);

  useEffect(firstColumn, [filterByNumericValues]);

  const handleSort = () => handleOrder({ column: sortColumn, sort: sortOrder });

  return (
    <header>
      <h1>Starwars Planets Search</h1>
      <input
        type="text"
        placeholder="Digite um planeta"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target: { value } }) => setName(value) }
      />
      <div>
        <select
          data-testid="column-sort"
          value={ sortColumn }
          onChange={ ({ target: { value } }) => setSortColumn(value) }
        >
          {tableHeadData.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          ))}
        </select>
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            name="sort"
            value="ASC"
            data-testid="column-sort-input-asc"
            onClick={ ({ target: { value } }) => setsortOrder(value) }
          />
          Crescente
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            id="DESC"
            name="sort"
            value="DESC"
            data-testid="column-sort-input-desc"
            onClick={ ({ target: { value } }) => setsortOrder(value) }
          />
          Decrescente
        </label>
        <button type="button" data-testid="column-sort-button" onClick={ handleSort }>
          Ordenar
        </button>
      </div>
      <div>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {availableColumns.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target: { value } }) => setComparison(value) }
        >
          {comparisonOptions.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          ))}
        </select>
        <input
          type="number"
          min="0"
          data-testid="value-filter"
          value={ number }
          onChange={ ({ target: { value } }) => setNumber(value) }
        />
        <button type="button" data-testid="button-filter" onClick={ handleFilter }>
          Filtrar
        </button>
      </div>
      {filterByNumericValues.map((filter, index) => (
        <div data-testid="filter" key={ index }>
          <p>
            Remove
            <strong>
              {` ${filter.column} `}
            </strong>
            filter
          </p>
          <button type="button" onClick={ () => rmvFilter(filter) }>
            X
          </button>
        </div>
      ))}
    </header>
  );
}

export default Header;
