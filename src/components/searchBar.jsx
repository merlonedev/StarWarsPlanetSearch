import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function SearchBar() {
  const { filters: { filterByName: { name }, filterByNumericValues },
    setNameFilter, setFilters } = useContext(MyContext);

  const initialColumnOpt = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [column, setColumn] = useState(initialColumnOpt);
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const columnOptions = !column ? initialColumnOpt
    : initialColumnOpt.filter((resp) => resp !== column);

  const handleFilterButton = () => {
    const filterState = {
      column,
      comparison,
      value,
    };
    setFilters([...filterByNumericValues, filterState]);
  };

  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target }) => setNameFilter(target.value) }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {columnOptions.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ ({ target }) => setValue(Number(target.value)) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterButton }
      >
        Filtrar
      </button>
    </>
  );
}

export default SearchBar;
