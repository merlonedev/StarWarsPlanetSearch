import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../Context';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function FiltersContainer() {
  const {
    handleNameFilter,
    handleFilterByNumeric,
    filters: { filterByNumericValues },
  } = useMyContext();

  const [numericFilters, setNumericFilters] = useState({
    column: columns[0],
    comparison: 'maior que',
    value: '1000',
  });

  useEffect(() => {
    const [newFirstColumn] = columns.filter((column) => !filterByNumericValues
      .some((numericFilter) => numericFilter.column === column))
      .map((column) => column);
    setNumericFilters((prevNumericFilters) => ({
      ...prevNumericFilters,
      column: newFirstColumn,
    }));
  }, [filterByNumericValues]);

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
        { columns.filter((column) => !filterByNumericValues
          .some((numericFilter) => numericFilter.column === column))
          .map((column) => <option key={ column } value={ column }>{ column }</option>) }
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
