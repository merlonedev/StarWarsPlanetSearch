import React, { useContext, useState } from 'react';
import SWContext from '../context/Context';

function SearchBar() {
  const { filters: { filterName: { name }, numericFilter },
    setFilterName, setFilters } = useContext(SWContext);

  const defaultColumn = [
    'population',
    'orbital_period',
    'rotation_period',
    'diameter',
    'surface_water'];

  const [comparison, setComparison] = useState('');
  const [column, setColumn] = useState(defaultColumn);
  const [value, setValue] = useState(0); //

  const columnOptions = !column
    ? defaultColumn
    : defaultColumn.filter((resp) => resp !== column);

  const handleBtnFilters = () => {
    const filterState = {
      column,
      comparison,
      value,
    };
    setFilters([...numericFilter, filterState]);
  };

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setFilterName(target.value) }
        data-testid="name-filter"
      />
      <select
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {columnOptions.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>
      <select
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ value }
        onChange={ ({ target }) => setValue(Number(target.value)) }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ handleBtnFilters }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      { numericFilter.map((filter) => (
        <p key={ filter.column } data-testid="filter">
          <span>{filter.comparison}</span>
          <span>{filter.column}</span>
          <span>{filter.value}</span>
          <button type="button">X</button>
        </p>
      ))}
    </div>
  );
}

export default SearchBar;
