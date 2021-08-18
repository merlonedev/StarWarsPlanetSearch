import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from '../../Context';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const txtColumns = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
  'climate',
  'terrain',
];

export default function FiltersContainer() {
  const {
    handleNameFilter,
    handleFilterByNumeric,
    handleOrder,
    filters: { filterByNumericValues },
  } = useMyContext();

  const [numericFilters, setNumericFilters] = useState({
    column: columns[0],
    comparison: 'maior que',
    value: '1000',
  });

  const [orderFilter, setOrderFilter] = useState({
    column: 'name',
    sort: 'ASC',
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

  const handleChangeNumeric = ({ target: { name, value } }) => {
    setNumericFilters((prevNumericFilters) => ({
      ...prevNumericFilters,
      [name]: value,
    }));
  };

  const handleChangeOrder = ({ target: { name, value } }) => {
    setOrderFilter((prevOrderFilters) => ({
      ...prevOrderFilters,
      [name]: value,
    }));
  };

  return (
    <section>
      <div>
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
          onChange={ handleChangeNumeric }
        >
          { columns.filter((column) => !filterByNumericValues
            .some((numericFilter) => numericFilter.column === column))
            .map((column) => (
              <option key={ column } value={ column }>{ column }</option>)) }
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ numericFilters.comparison }
          onChange={ handleChangeNumeric }
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
          onChange={ handleChangeNumeric }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleFilterByNumeric(numericFilters) }
        >
          Adicionar filtro
        </button>
      </div>
      <div>
        <select
          name="column"
          data-testid="column-sort"
          value={ orderFilter.column }
          onChange={ handleChangeOrder }
        >
          { txtColumns.map((column) => (
            <option key={ uuidv4() } value={ column }>{ column }</option>)) }
        </select>
        <label htmlFor="acs-input">
          Acrescente
          <input
            id="acs-input"
            type="radio"
            name="sort"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ handleChangeOrder }
            checked={ orderFilter.sort === 'ASC' }
          />
        </label>
        <label htmlFor="desc-input">
          Descrescente
          <input
            id="desc-input"
            type="radio"
            name="sort"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ handleChangeOrder }
            checked={ orderFilter.sort === 'DESC' }
          />
        </label>
        <button
          type="button"
          onClick={ () => handleOrder(orderFilter) }
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </div>
    </section>
  );
}
