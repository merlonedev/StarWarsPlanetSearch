import React, { useContext } from 'react';
import MyContext from '../context/Context';

function Filter() {
  const { filters, setFilters,
    setNumericFilters, numericFilters } = useContext(MyContext);

  const dropDown = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const comparisonDropDown = ['maior que', 'menor que', 'igual a'];

  const handleNumericFiltres = ({ target: { name, value } }) => {
    setNumericFilters((prevNumericFilters) => ({

      ...prevNumericFilters,
      [name]: value,
    }));
  };
  // filters { filterByName,}
  const handleFilters = ({ column, comparison, value }) => {
    setFilters((prevFilters) => {
      if (!prevFilters.filterByNumericValues[0].value) {
        return { ...prevFilters, filterByNumericValues: [{ column, comparison, value }] };
      }
      return { ...prevFilters,
        filterByNumericValues: [
          ...prevFilters.filterByNumericValues,
          { column, comparison, value },
        ],
      };
    });
  };

  const setColumnOptions = () => {
    const { filterByNumericValues } = filters;
    const columnFilters = filterByNumericValues.map((filter) => filter.column);
    let columns = dropDown;
    columnFilters.forEach((col) => {
      columns = columns.filter((option) => option !== col);
    });
    return columns;
  };

  const columnOptions = setColumnOptions();
  return (
    <header>
      <label htmlFor="filter">
        Filter
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setFilters({
            ...filters,
            filterByName: {
              name: value,
            },
          }) }
        />
      </label>
      <select
        data-testid="column-filter"
        name="column"
        value={ numericFilters.column }
        onChange={ handleNumericFiltres }
      >
        {
          columnOptions
            .map(
              (item, index) => <option key={ index }>{ item }</option>,
            )
        }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ numericFilters.comparison }
        onChange={ handleNumericFiltres }
      >
        {
          comparisonDropDown
            .map(
              (item, index) => <option key={ index }>{ item }</option>,
            )
        }
      </select>
      <label htmlFor="valueFilter">
        valueFilter
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          value={ numericFilters.value }
          onChange={ handleNumericFiltres }
          min={ 0 }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilters(numericFilters) }
      >
        Adicionar filtro
      </button>
    </header>
  );
}
export default Filter;
