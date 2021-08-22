import React, { useState } from 'react';
import { useGlobalState } from '../Provider';

function FormFilterByComparison() {
  // Estado Global
  const { filters, setFilters } = useGlobalState();
  const { filterByNumericValues } = filters;

  // Estados Locais
  const [filterOptions, setFilterOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [currentFilter, setCurrentFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  function handleChange({ target: { value } }, key) {
    setCurrentFilter({
      ...currentFilter,
      [key]: value,
    });
  }

  function handleClick() {
    // Envia ao Estdo Global
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, currentFilter],
    });

    // Retira a opcao usada e salva no estado local
    const updatedFilterOptions = filterOptions.filter((col) => (
      col !== currentFilter.column
    ));
    setFilterOptions(updatedFilterOptions);

    // Atualiza o filtro atual para a nova opcao
    setCurrentFilter({
      ...currentFilter,
      column: updatedFilterOptions[0],
    });
  }

  const removeFilter = ({ target: { id } }) => {
    // Atualiza a lista de filtros disponiveis
    setFilterOptions([
      ...filterOptions,
      id,
    ]);

    // Atualiza o Estado Global
    const updatedFilterByNumericValues = filterByNumericValues
      .filter((el) => el.column !== id);
    setFilters({
      ...filters,
      filterByNumericValues: updatedFilterByNumericValues,
    });
  };

  const renderOptions = () => (
    filterOptions.map((content, index) => (
      <option key={ index }>{content}</option>
    ))
  );

  const renderFilters = () => (
    filterByNumericValues.map((value, index) => (
      <div data-testid="filter" key={ index }>
        <span>{ `${value.column} ` }</span>
        <span>{ `${value.comparison} ` }</span>
        <span>{ `${value.value} ` }</span>
        <button
          id={ value.column }
          onClick={ (e) => removeFilter(e) }
          type="button"
        >
          X
        </button>
      </div>
    ))
  );

  return (
    <form>

      <select
        onChange={ (e) => handleChange(e, 'column') }
        data-testid="column-filter"
      >
        { renderOptions() }
      </select>

      <select
        onChange={ (e) => handleChange(e, 'comparison') }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        onChange={ (e) => handleChange(e, 'value') }
        type="number"
        data-testid="value-filter"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filter
      </button>

      { renderFilters() }

    </form>
  );
}

export default FormFilterByComparison;
