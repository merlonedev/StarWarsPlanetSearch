import React, { useState } from 'react';
import { useGlobalState } from '../Provider';

function FormSortTable() {
  // Estados
  const { filters, setFilters } = useGlobalState();
  const [state, setState] = useState({
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });

  function handleClick() {
    setFilters({
      ...filters,
      ...state,
    });
  }

  const handleChange = (e, name, value) => {
    if (!value) value = e.target.value;
    setState({
      order: {
        ...state.order,
        [name]: value,
      },
    });
  };

  return (
    <form>

      <select
        data-testid="column-sort"
        onChange={ (e) => handleChange(e, 'column', false) }
      >
        <option value="Name">Name</option>
        <option value="orbital_period">Orbital Period</option>
      </select>

      <label htmlFor="ASC">
        A ➡ Z
        <input
          // name="sort"
          data-testid="column-sort-input-asc"
          type="radio"
          onChange={ (e) => handleChange(e, 'sort', 'ASC') }
        />
      </label>

      <label htmlFor="DESC">
        Z ➡ A
        <input
          // name="sort"
          data-testid="column-sort-input-desc"
          type="radio"
          onChange={ (e) => handleChange(e, 'sort', 'DESC') }
        />
      </label>

      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ handleClick }
      >
        Sort
      </button>

    </form>
  );
}

export default FormSortTable;
