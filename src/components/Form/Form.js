import React, { useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

export default function FiltersContainer() {
  const { setFilterByName, setFilterByNum } = useGlobalContext();

  const [numFilters, setNumFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '1000',
  });

  const handleChange = ({ target: { name, value } }) => {
    setNumFilters((prevNumFilters) => ({
      ...prevNumFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Planet Name"
        onChange={ setFilterByName }
      />
      <select
        data-testid="column-filter"
        name="column"
        value={ numFilters.column }
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ numFilters.comparison }
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ numFilters.value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterByNum(numFilters) }
      >
        Adicionar filtro
      </button>
    </div>
  );
}
