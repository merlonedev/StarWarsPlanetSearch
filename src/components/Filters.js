import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from '../context/MainContext';

const filtrableColumns = {
  numeric: [
    'population',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
  ],

  text: [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'terrain',
    'surface_water',
    'population',
  ],

  comparative: [
    'maior que',
    'menor que',
    'igual a',
  ],
};

export default function FiltersContainer() {
  const {
    handleNameFilter,
    handleFilterByNumeric,
    handleOrder,
    filters: { filterByNumericValues },
  } = useMyContext();

  const { numeric, text, comparative } = filtrableColumns;

  const [numericFilters, setNumericFilters] = useState({
    column: numeric[0],
    comparison: 'maior que',
    value: '0',
  });

  const [orderFilter, setOrderFilter] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const availableColumns = useCallback(() => (
    numeric.filter((column) => !filterByNumericValues
      .map((filter) => filter.column).includes(column))
  ), [numeric, filterByNumericValues]);

  useEffect(() => {
    const [newFirstColumn] = availableColumns();
    setNumericFilters((prevNumericFilters) => ({
      ...prevNumericFilters,
      column: newFirstColumn,
    }));
  }, [availableColumns]);

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
        { availableColumns().length > 0 && (
          <select
            data-testid="column-filter"
            name="column"
            value={ numericFilters.column }
            onChange={ handleChangeNumeric }
          >
            { availableColumns().map((column) => (
              <option key={ column } value={ column }>{ column }</option>))}
          </select>
        )}
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ numericFilters.comparison }
          onChange={ handleChangeNumeric }
        >
          { comparative.map((name) => (
            <option key={ name } value={ name }>{ name }</option>)) }
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
          disabled={ availableColumns().length < 1 }
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
          { text.map((column) => (
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
