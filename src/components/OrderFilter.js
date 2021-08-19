import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function OrderFilter() {
  const { filters, setFilters } = useContext(AppContext);
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');
  const columns = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const handleSubmit = () => {
    setFilters({ ...filters,
      order: {
        column,
        sort,
      },
    });
  };

  return (
    <form>
      <select
        id="column-sort"
        data-testid="column-sort"
        value={ column }
        onChange={ (event) => setColumn(event.target.value) }
      >
        {
          columns.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))
        }
      </select>
      <label htmlFor="ASC">
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ (event) => setSort(event.target.value) }
        />
        Asc.
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ (event) => setSort(event.target.value) }
        />
        Desc.
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSubmit }
      >
        Ordenar
      </button>
    </form>
  );
}

export default OrderFilter;
