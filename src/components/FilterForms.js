import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/Context';

const COLUMNS_FILTER_ARRAY = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const INITIAL_STATE = { filters: {
  filterByName: { name: '' },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: '',
      value: '',
    },
  ],
} };

function FilterForms() {
  const [filters, setFilters] = useState({ ...INITIAL_STATE });

  const { filters: { filterByName: { name: nameValue } } } = filters;

  const consumer = useContext(MyContext);
  const { setFiltersProvider } = consumer;

  const handleStringChange = ({ target: { id, value, name } }) => {
    setFilters({
      ...filters,
      filters: {
        [id]: {
          [name]: value,
        },
      } });
  };

  const handleNumericChange = ({ target: { value, name } }) => {
    setFilters({
      ...filters,
      filters: {
        filterByNumericValues: [{
          [name]: value,
        }],
      },
    });
  };

  useEffect(() => setFiltersProvider(filters));

  return (
    <form>
      <label htmlFor="filterByName">
        Planeta
        <input
          type="text"
          value={ nameValue }
          data-testid="name-filter"
          onChange={ handleStringChange }
          id="filterByName"
          name="name"
          placeholder="Nome do planeta"
        />
      </label>

      <label htmlFor="filterByNumericValues">
        Atributos
        <select
          id="filterByNumericValues"
          name="column"
          data-testid="column-filter"
          value=""
          onChange={ handleNumericChange }
        >
          { COLUMNS_FILTER_ARRAY.map((item) => (
            <option
              key={ item }
              value={ item }
            >
              { item }
            </option>)) }
        </select>
      </label>
    </form>
  );
}

export default FilterForms;
