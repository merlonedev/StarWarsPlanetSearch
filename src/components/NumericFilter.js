import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function NumericFilter() {
  const { filters, setFilters } = useContext(Context);
  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleClick = () => {
    setFilters(
      {
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, numericFilter],
      },
    );
  };

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilter({
      ...numericFilter,
      [name]: value,
    });
  };

  return (
    <div>
      <select
        name="column"
        onChange={ handleChange }
        value={ numericFilter.column }
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        onChange={ handleChange }
        name="comparison"
        value={ numericFilter.comparison }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        onChange={ handleChange }
        name="value"
        type="text"
        data-testid="value-filter"
        value={ numericFilter.value }
      />

      <button
        onClick={ handleClick }
        type="button"
        data-testid="button-filter"
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default NumericFilter;
