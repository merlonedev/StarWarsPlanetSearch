import React, { useContext } from 'react';
import MyContext from '../providers/MyContext';

// feito pair-programming com Raphael Soares, vlw bro, tmj cara
// raphael achou esse projeto fácil

function SearchBar() {
  const { filters, setFilters, numericValue, setNumericValue } = useContext(MyContext);

  const myArray = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisonArray = ['maior que', 'menor que', 'igual a'];

  const handleNumeric = ({ target: { name, value } }) => {
    setNumericValue((numValue) => ({
      ...numValue,
      [name]: value,
    }));
  };

  const handleFilter = ({ column, comparison, value }) => {
    setFilters((theFilter) => {
      if (!theFilter.filterByNumericValues[0].value) {
        return { ...theFilter, filterByNumericValues: [{ column, comparison, value }] };
      }
      return {
        ...theFilter,
        filterByNumericValues: [
          ...theFilter.filterByNumericValues,
          { column, comparison, value },
        ],
      };
    });
  };

  const setColumnOptions = () => {
    const { filterByNumericValues } = filters;
    const columnFilters = filterByNumericValues.map((filter) => filter.column);
    let columns = myArray;
    columnFilters.forEach((col) => {
      columns = columns.filter((option) => option !== col);
    });
    return columns;
  };

  const columnOptions = setColumnOptions();

  function columnFilter() {
    return (
      <select
        name="column"
        value={ numericValue.column }
        data-testid="column-filter"
        onChange={ handleNumeric }
      >
        { columnOptions.map((item, index) => <option key={ index }>{ item }</option>) }
      </select>
    );
  }

  function comparisonFilter() {
    return (
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ numericValue.comparison }
        onChange={ handleNumeric }
      >
        { comparisonArray.map((item, index) => <option key={ index }>{ item }</option>) }
      </select>
    );
  }

  function valueFilter() {
    return (
      <input
        type="number"
        min={ 0 }
        data-testid="value-filter"
        name="value"
        onChange={ handleNumeric }
      />
    );
  }

  function buttonFilter() {
    return (
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilter(numericValue) }
      >
        Pesquisa
      </button>
    );
  }

  return (
    <form>
      <label htmlFor="search">
        Busca
        <input
          id="search"
          data-testid="name-filter"
          onChange={ ({ target }) => setFilters({
            ...filters,
            filterByName: {
              name: target.value,
            },
          }) }
        />
      </label>
      { columnFilter() }
      { comparisonFilter() }
      { valueFilter() }
      { buttonFilter() }
    </form>
  );
}

export default SearchBar;
