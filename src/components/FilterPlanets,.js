import React, { useEffect, useState } from 'react';
import { useMyContext } from '../context/Provider';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function FiltersPlanets() {
  const {
    handleNameFilter,
    handleFilternumbers,
    filters: { filterByNumericValues },
  } = useMyContext();

  const [numberfilter, setnumberfilter] = useState({
    column: columns[0],
    comparison: 'maior que',
    value: '1000',
  });

  useEffect(() => {
    const [newFirstColumn] = columns.filter((column) => !filterByNumericValues
      .some((numericFilter) => numericFilter.column === column))
      .map((column) => column);
    setnumberfilter((prevnumberfilter) => ({
      ...prevnumberfilter,
      column: newFirstColumn,
    }));
  }, [filterByNumericValues]);

  const handleChange = ({ target: { name, value } }) => {
    setnumberfilter((prevnumberfilter) => ({
      ...prevnumberfilter,
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
        value={ numberfilter.column }
        onChange={ handleChange }
      >
        { columns.filter((column) => !filterByNumericValues
          .some((numericFilter) => numericFilter.column === column))
          .map((column) => <option key={ column } value={ column }>{ column }</option>) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ numberfilter.comparison }
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
        value={ numberfilter.value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilternumbers(numberfilter) }
      >
        Adicionar filtro
      </button>
    </section>
  );
}
