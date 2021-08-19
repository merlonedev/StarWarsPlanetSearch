import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterBar() {
  const { filters, setFilters } = useContext(AppContext);
  const [inputFilters, setInputFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const columnFilterList = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].filter((columnValue) => !filters.filterByNumericValues
    .some(({ column }) => column === columnValue));

  const comparisonFilterList = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setFilters({ ...filters, filterByName: { name: value } });
    } else {
      const correctValue = (name === 'value' && value < 0) ? 0 : value;
      setInputFilters({
        ...inputFilters,
        [name]: correctValue,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, inputFilters],
    });
  };

  return (
    <>
      <label htmlFor="name-filter">
        Nome
        <input
          data-testid="name-filter"
          id="name-filter"
          name="name"
          onChange={ handleChange }
          type="text"
          value={ filters.filterByName.name }
        />
      </label>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="column-filter">
          Coluna
          <select
            id="column-filter"
            data-testid="column-filter"
            name="column"
            onChange={ handleChange }
            required
            value={ inputFilters.column }
          >
            { columnFilterList
              .map((column) => (
                <option key={ column } value={ column }>{ column }</option>
              )) }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Comparação
          <select
            id="comparison-filter"
            data-testid="comparison-filter"
            name="comparison"
            onChange={ handleChange }
            required
            value={ inputFilters.comparison }
          >
            { comparisonFilterList
              .map((comparison) => (
                <option key={ comparison } value={ comparison }>{ comparison }</option>
              )) }
          </select>
        </label>
        <label htmlFor="value-filter">
          Valor
          <input
            data-testid="value-filter"
            id="value-filter"
            name="value"
            onChange={ handleChange }
            required
            type="number"
            value={ inputFilters.value }
          />
        </label>
        <button type="submit" data-testid="button-filter">Adicionar filtro</button>
      </form>
    </>
  );
}

export default FilterBar;
