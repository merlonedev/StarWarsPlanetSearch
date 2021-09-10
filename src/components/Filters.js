import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Filter() {
  const {
    filters: { filterByNumericValues },
    handleFilterByName,
    handleFilterByNumericClick,
  } = useContext(MainContext);
  const [numericFilters, setNumericFilters] = useState({
    column: columns[0],
    comparison: 'maior que',
    value: '0',
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

  function handleChange({ target: { name, value } }) {
    setNumericFilters((prevNumericFilters) => ({
      ...prevNumericFilters,
      [name]: value,
    }));
  }

  return (
    <div>
      <section>
        <label htmlFor="name">
          Filtrar por Nome:
          <input
            type="text"
            name="name"
            id="name"
            data-testid="name-filter"
            placeholder="Digite aqui o nome"
            onChange={ handleFilterByName }
          />
        </label>
      </section>
      <section>
        <select
          data-testid="column-filter"
          name="column"
          value={ numericFilters.column }
          onChange={ handleChange }
        >
          { columns.filter((column) => !filterByNumericValues
            .some((numericFilter) => numericFilter.column === column))
            .map((column) => (
              <option key={ column } value={ column }>{ column }</option>
            )) }
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
          type="submit"
          data-testid="button-filter"
          onClick={ () => handleFilterByNumericClick(numericFilters) }
        >
          Filtrar
        </button>
      </section>
    </div>
  );
}

export default Filter;
