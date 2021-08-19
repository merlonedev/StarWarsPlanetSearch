import React, { useContext, useEffect, useState } from 'react';
import context from '../context';

import defaultFilters from '../helpers/filters';
import useFilters from '../hooks/useFilters';
import CurrentFiltersList from './CurrentFiltersList';

function Filters() {
  const [inputText, setInputText] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [sort, setSort] = useState('ASC');
  const [sortColumn, setSortColumn] = useState('name');
  const {
    setName,
    handleSetFilters,
    setOrder,
    filters: {
      filterByNumericValues,
    },
  } = useContext(context);
  const [filters, { removeFilter, restoreFilter }, currentFilters] = useFilters();

  useEffect(() => {
    setColumn(filters[0]);
  }, [filters]);

  useEffect(() => {
    setName(inputText);
  }, [inputText, setName]);

  const handleAddFilter = () => {
    handleSetFilters({ column, comparison, value: parseInt(value, 10) });
    removeFilter(column);
  };

  const handleRemoveFilter = (filter) => {
    restoreFilter(filter);
    const newFilters = filterByNumericValues.filter((item) => item.column !== filter);
    handleSetFilters(newFilters, true);
  };

  const handleChangeSort = (text) => {
    setSort(text);
  };
  return (
    <div>
      <input
        value={ inputText }
        onChange={ ({ target }) => setInputText(target.value) }
        data-testid="name-filter"
      />
      <form>
        <label htmlFor="column">
          <select
            name="column"
            id="column"
            data-testid="column-filter"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            { filters.map((filter, index) => (
              <option
                key={ index }
                value={ filter }
              >
                {filter}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            value={ comparison }
            name="comparison"
            id="comparison"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            type="number"
            id="value"
            data-testid="value-filter"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>
        <button
          type="button"
          onClick={ handleAddFilter }
          data-testid="button-filter"
        >
          Adicionar filtro
        </button>
      </form>
      <CurrentFiltersList filters={ currentFilters } onClick={ handleRemoveFilter } />
      <label htmlFor="filter-sort">
        <select
          data-testid="column-sort"
          onChange={ ({ target }) => setSortColumn(target.value) }
          value={ sortColumn }
          id="filter-sort"
        >
          { defaultFilters.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              {item}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="ASC">
        ASC
        <input
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ ({ target }) => handleChangeSort(target.value) }
          name="sort"
          type="radio"
          checked
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ ({ target }) => handleChangeSort(target.value) }
          name="sort"
          type="radio"
        />
      </label>
      <button
        onClick={ () => setOrder({ sort, column: sortColumn }) }
        type="button"
        data-testid="column-sort-button"
      >
        Apply sort
      </button>
    </div>
  );
}

export default Filters;
