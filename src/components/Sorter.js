import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function Sorter() {
  const { filters: { setOrder } } = useContext(AppContext);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');

  const tableHeaders = [
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

  const handleSort = () => {
    const sortValues = {
      column,
      sort,
    };
    setOrder(sortValues);
  };

  return (
    <div>
      <form>
        <select
          data-testid="column-sort"
          name="column"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {tableHeaders.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <div onChange={ (e) => setSort(e.target.value) }>
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            value="ASC"
            name="sort"
          />
          Crescente
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            value="DESC"
            name="sort"
          />
          Decrescente
        </div>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ handleSort }
        >
          Ordenar
        </button>
      </form>
    </div>
  );
}

export default Sorter;
