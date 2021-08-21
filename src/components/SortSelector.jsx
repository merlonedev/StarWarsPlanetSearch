import React, { useState, useContext } from 'react';
import Context from '../context/context';

function SortSelector() {
  const { setOrder } = useContext(Context);
  const [sortColumn, setSortColumn] = useState('Name');
  const [sort, setSort] = useState('ASC');

  const column = ([
    'name',
    'population',
    'orbital_period',
    'climate',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleClick = () => {
    const sortObj = {
      column: sortColumn,
      sort,
    };
    setOrder(sortObj);
  };

  return (
    <div>
      <select
        data-testid="column-sort"
        value={ sortColumn }
        onChange={ ({ target: { value: val } }) => setSortColumn(val) }
      >
        {
          column.map((fil, index) => (
            <option key={ index } value={ fil }>{fil}</option>))
        }
      </select>
      <label htmlFor="sort-asc" className="radio">
        ASC
        <input
          id="sort-asc"
          type="radio"
          name="sort"
          value="ASC"
          onChange={ ({ target: { value: val } }) => setSort(val) }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="sort-desc" className="radio">
        DESC
        <input
          id="sort-desc"
          type="radio"
          name="sort"
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ ({ target: { value: val } }) => setSort(val) }

        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }
      >
        Ordenar
      </button>
    </div>
  );
}

export default SortSelector;
