import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Input from './Input';
import Option from './Option';

function Filters() {
  const numericFiltersState = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };

  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const [numericFilters, setNumericFilters] = useState(numericFiltersState);
  const [columnOptions, setColumnOptions] = useState(options);
  const { filtersState, setFiltersState } = useContext(Context);

  const { filters: { filterByName: { name } } } = filtersState;

  const handleContextChange = (event) => {
    const newState = {
      ...filtersState,
      filters: {
        ...filtersState.filters,
        filterByName: {
          name: event.target.value,
        },
      },
    };
    setFiltersState(newState);
  };

  const handleStateChange = (event) => {
    const newState = {
      ...numericFilters,
      [event.target.name]: event.target.value,
    };
    setNumericFilters(newState);
  };

  const handleAddFilter = () => {
    const newState = {
      ...filtersState,
      filters: {
        ...filtersState.filters,
        filterByNumericValues: [
          ...filtersState.filters.filterByNumericValues,
          numericFilters,
        ],
      },
    };
    setFiltersState(newState);

    const selectedOptions = Object.values(numericFilters)[0];
    const newOptions = columnOptions.filter((option) => option !== selectedOptions);
    setColumnOptions(newOptions);
  };

  return (
    <section>
      <div>
        <Input
          testid="name-filter"
          value={ name }
          onChange={ handleContextChange }
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          onChange={ handleStateChange }
          name="column"
        >
          { columnOptions.map((option) => <Option key={ option } option={ option } />) }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleStateChange }
          name="comparison"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <Input
          type="number"
          testid="value-filter"
          onChange={ handleStateChange }
          name="value"
          value={ numericFilters.value }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleAddFilter }
        >
          Adicionar Filtro
        </button>
      </div>
    </section>
  );
}

export default Filters;
