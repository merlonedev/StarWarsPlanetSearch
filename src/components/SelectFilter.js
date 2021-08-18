import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SelectFilter = () => {
  const { filterNumeric } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState('');

  const handleClick = () => filterNumeric({ column, comparison, number });

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="rotation_period">rotation_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
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
        onChange={ ({ target: { value } }) => setNumber(value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        adicionar filtro

      </button>
    </div>
  );
};

export default SelectFilter;
