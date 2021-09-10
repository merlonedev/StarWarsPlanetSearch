import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

export default function SortTable() {
  const columnOptions = [
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

  const [columnState, setColumnState] = useState('');
  const [sortState, setSortState] = useState('');
  const { filter, setFilter } = useContext(AppContext);

  const addFilter = () => {
    const newFilter = {
      ...filter,
      order: {
        ...filter.order,
        column: columnState,
        sort: sortState,
      },
    };
    setFilter(newFilter);
  };

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ (e) => setColumnState(e.target.value) }
      >
        {columnOptions.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <label htmlFor="ASC">
        ASC
        <input
          type="radio"
          id="ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ (e) => setSortState(e.target.value) }
        />
      </label>
      <label htmlFor="DSC">
        DSC
        <input
          type="radio"
          id="DSC"
          value="DSC"
          data-testid="column-sort-input-desc"
          onChange={ (e) => setSortState(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ addFilter }
      >
        Ordenar
      </button>
    </div>
  );
}
