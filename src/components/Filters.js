import React, { useContext, useState } from 'react';
import context from '../context';

function Filters() {
  const [inputText, setInputText] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('bigger');
  const [value, setValue] = useState(0);
  const { setName, setFilters } = useContext(context);
  const handleClick = () => {
    setName(inputText);
    setInputText('');
  };
  return (
    <div>
      <input
        value={ inputText }
        onChange={ ({ target }) => setInputText(target.value) }
        data-testid="name-filter"
      />
      <button type="button" onClick={ handleClick }>Search</button>
      <form>
        <label htmlFor="column">
          <select
            name="column"
            id="column"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option value="population">Population</option>
            <option value="orbital_period">Orbital Period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">Rotation Period</option>
            <option value="surface_water">Surface Water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            value={ comparison }
            name="comparison"
            id="comparison"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option value="bigger">maior que</option>
            <option value="smaller">menor que</option>
            <option value="equal">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            type="number"
            id="value"
            data-testid="value-filter"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>
        <button
          type="button"
          onClick={ () => setFilters({ column, comparison, value: parseInt(value, 10) }) }
        >
          Adicionar filtro
        </button>
      </form>
    </div>
  );
}

export default Filters;
