import React, { useState, useContext } from 'react';
import ContextApi from '../context/ContextApi';

export default function SortingColumns() {
  const columnsOptions = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const { data, setDataFilter, filters, setFilters } = useContext(ContextApi);
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  const renderSorted = () => {
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
    const aux = [...data];
    console.log(aux);
    aux.sort(({ [column]: a }, { [column]: b }) => (a.localeCompare(b)))
      .sort((a, b) => (a[column] - b[column]));
    console.log(aux);
    if (sort === 'DESC') {
      aux.reverse();
    }
    setDataFilter(aux);
  };

  return (
    <form>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {
          columnsOptions.map((option) => (<option key={ option }>{option}</option>))
        }
      </select>
      <label htmlFor="ASC">
        Crescente
        <input
          data-testid="column-sort-input-asc"
          id="ASC"
          type="radio"
          value="ASC"
          name="sort-btn"
          onChange={ ({ target: { value } }) => setSort(value) }
          checked={ sort === 'ASC' }
        />
      </label>
      <label htmlFor="DESC">
        Decrescente
        <input
          data-testid="column-sort-input-desc"
          id="DESC"
          type="radio"
          value="DESC"
          name="sort-btn"
          onChange={ ({ target: { value } }) => setSort(value) }
          checked={ sort === 'DESC' }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ renderSorted }
      >
        Ordenar
      </button>
    </form>
  );
}
