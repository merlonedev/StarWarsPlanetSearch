import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';
import './Filters.css';

function SelectFilter() {
  const { filters, setFilters, columns, setColumns } = useContext(Context);
  const { filterByNumericValues } = filters;
  // console.log(columns);

  const [numericFilter, setNumericFilter] = useState({});
  const { column, comparison, value } = numericFilter;
  const comparisons = ['maior que', 'menor que', 'igual a'];

  // const [usedColumns, setUsedColumns] = useState([]);

  function handleChange({ target }) {
    setNumericFilter({
      ...numericFilter,
      [target.name]: target.value,
    });
  }

  function handleClickFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        numericFilter,
      ],
    });
    // Requisito 4 - ideia di filter tirada do colega David: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/13/commits/1689e5bfc4cbe412e6ea50bf6d911a67dab073e6
    setColumns(columns.filter((col) => !column.includes(col)));
  }

  // Requisito 4
  useEffect(() => {
    setNumericFilter({
      column: columns[0],
      comparions: 'maior que',
      value: '0',
    });
  }, [columns]);

  return (
    <div className="select-filter">
      {/* { console.log(planets[0]) } */}
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          value={ column }
          id="column"
          name="column"
          onChange={ handleChange }

        >
          {
            columns.map((option) => (
              <option key={ option }>{option}</option>
            ))
          }
        </select>
      </label>

      <label htmlFor="comparison">
        <select
          data-testid="comparison-filter"
          value={ comparison }
          id="comparison"
          name="comparison"
          onChange={ handleChange }
        >
          {
            comparisons.map((option) => (
              <option key={ option }>{option}</option>
            ))
          }
        </select>
      </label>

      <label htmlFor="value">
        <input
          data-testid="value-filter"
          value={ value }
          id="value"
          name="value"
          type="number"
          onChange={ handleChange }
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClickFilter }
      >
        Add filter
      </button>
    </div>
  );
}

export default SelectFilter;
