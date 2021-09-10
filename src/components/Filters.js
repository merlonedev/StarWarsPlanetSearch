import React, { useContext, useState } from 'react';
import MainContext from '../context/MainContext';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Filter() {
  const { filters, setFilters } = useContext(MainContext);
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  function handleChange({ target: { name, value } }) {
    setNumericFilters((prevNumericFilters) => ({
      ...prevNumericFilters,
      [name]: value,
    }));
  }

  const handleFilterByNumericClick = ({ column, comparison, value }) => {
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

  return (
    <div>
      <section>
        <label htmlFor="name">
          Filtrar por Nome:
          <input
            type="text"
            name="name"
            id="name"
            data-testid="name-filter"
            placeholder="Digite aqui o nome"
            onChange={ ({ target: { value } }) => {
              setFilters({ ...filters, filterByName: { name: value } });
            } }
          />
        </label>
      </section>
      <section>
        <select
          data-testid="column-filter"
          name="column"
          value={ numericFilters.column }
          onChange={ handleChange }
        >
          { columns.map((colum) => (
            <option key={ colum } value={ colum }>{ colum }</option>))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ numericFilters.comparison }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          value={ numericFilters.value }
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ () => handleFilterByNumericClick(numericFilters) }
        >
          Filtrar
        </button>
      </section>
    </div>
  );
}

export default Filter;
