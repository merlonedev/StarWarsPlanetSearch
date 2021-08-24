import React, { useState } from 'react';
import { useMyContext } from '../context/Provider';

export default function FiltersPlanets() {
  const { handleNameFilter, handleFilterByNumeric } = useMyContext();
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '1000',
  });

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters((prevNumericFilters) => ({
      ...prevNumericFilters,
      [name]: value,
    }));
  };
  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Digite o nome de um planeta"
        onChange={ handleNameFilter }
      />
      <select
        data-testid="column-filter"
        name="column"
        value={ numericFilters.column }
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
        value={ numericFilters.comparison }
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
        value={ numericFilters.value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilterByNumeric(numericFilters) }
      >
        Adicionar filtro
      </button>
    </section>
  );
}
