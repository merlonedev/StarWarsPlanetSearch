import React, { useState, useContext } from 'react';
import Context from '../context/context';

function Header() {
  const { setFilterName } = useContext(Context);
  const {
    filters: { filterNumericValues }, setfilterNumericValues } = useContext(Context);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');

  const handleChange = ({ target: { value: val } }) => {
    setFilterName(val);
  };

  const handleFilterButton = () => {
    const numerics = {
      column,
      comparison,
      value,
    };
    setfilterNumericValues([...filterNumericValues, numerics]);
  };

  return (
    <header>
      <h1>Star Wars Search Planets</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <div>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value: val } }) => setColumn(val) }

        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target: { value: val } }) => setComparison(val) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ ({ target: { value: val } }) => setValue(val) }

        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleFilterButton }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
}

export default Header;
