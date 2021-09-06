import React, { useContext, useState } from 'react';
import { FiltersContext } from '../context';
import { initialColumnOptions } from '../context/providers/FiltersProvider';

function ColumnSort() {
  const { filters } = useContext(FiltersContext);
  const { setColumnSort, setAscOrDesc } = filters;

  const [localColumnSort, setLocalColumnSort] = useState();
  const [localAscOrDesc, setLocalAscOrDesc] = useState('ASC');

  const handleSubmit = (e) => {
    e.preventDefault();
    setColumnSort(localColumnSort);
    setAscOrDesc(localAscOrDesc);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label
        htmlFor="column-sort"
      >
        SortBy:
        <select
          id="column-sort"
          data-testid="column-sort"
          value={ localColumnSort }
          onChange={ ({ target }) => {
            setLocalColumnSort(target.value);
          } }
        >
          {initialColumnOptions.map((columnOption) => (
            <option key={ columnOption } value={ columnOption }>
              {columnOption}
            </option>
          ))}
        </select>
      </label>
      <label
        htmlFor="column-sort-input-asc"
      >
        <input
          data-testid="column-sort-input-asc"
          id="column-sort-input-asc"
          type="radio"
          value="ASC"
          checked={ localAscOrDesc === 'ASC' }
          onChange={ () => setLocalAscOrDesc('ASC') }
        />
        ASC
      </label>
      <label
        htmlFor="column-sort-input-desc"
      >
        <input
          data-testid="column-sort-input-desc"
          id="column-sort-input-desc"
          type="radio"
          value="DESC"
          checked={ localAscOrDesc === 'DESC' }
          onChange={ () => setLocalAscOrDesc('DESC') }
        />
        DESC
      </label>
      <button type="submit" data-testid="column-sort-button">
        Sort!
      </button>
    </form>
  );
}

export default ColumnSort;
