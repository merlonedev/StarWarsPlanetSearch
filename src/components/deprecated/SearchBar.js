import React, { useContext } from 'react';
import SearchInput from './SearchInput';
import Context from '../context/Context';

function FilterForm() {
  const {
    filters,
    wasFiltered,
    filterByName,
    clearFilters,
    submitFilters } = useContext(Context);
  const filtersUI = Object.values(filters.filterByNumericValues);
  return (
    <>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          return submitFilters();
        } }
      >
        <label htmlFor="filterByName">
          Filtrar por nome
          <input
            name="filterByName"
            id="filterByName"
            data-testid="name-filter"
            onChange={ filterByName }
            required
          />
        </label>
      </form>
      <SearchInput />
      <div>
        { wasFiltered && filtersUI.map((filter, index) => (
          <div data-testid="filter" key={ index }>
            <p>
              { JSON.stringify(filter) }
              <button type="button" onClick={ () => clearFilters(filter.column) }>
                X
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FilterForm;
