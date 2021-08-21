import React, { useContext, useState } from 'react';
import Context from '../ContextStuff/Context';

export default function OrderColumns() {
  const { systems, filters, setFilters } = useContext(Context);
  const [filterOrder, setFilterOrder] = useState({
    column: 'name',
    sort: '',
  });

  function handleChange({ target: { name, value } }) {
    setFilterOrder({
      ...filterOrder,
      [name]: value,
    });
  }

  function saveFilter() {
    setFilters({
      ...filters,
      order: filterOrder,
    });
  }

  if (!systems.length) return null;

  return (
    <div>
      <label htmlFor="column-sort">
        Select column
        <select
          data-testid="column-sort"
          name="column"
          onChange={ handleChange }
        >
          { Object.keys(systems[0])
            .map((option, id) => <option key={ id } value={ option }>{ option }</option>)}
        </select>
      </label>
      <label htmlFor="column-sort-input" id="asc-desc">
        Select order:
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          name="sort"
          onChange={ handleChange }
        />
        Descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          name="sort"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        onClick={ saveFilter }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
}
