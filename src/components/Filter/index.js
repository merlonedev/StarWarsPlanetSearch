import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../../context/PlanetsContext/PlanetsContext';

function Filter() {
  const {
    options,
    setOptions,
    range,
    filters,
    setFilters,
  } = useContext(PlanetsContext);
  const [entries, setEntries] = useState({});

  useEffect(() => {
    setEntries({
      column: options[0],
      comparison: range[0],
      value: 0,
    });
  }, [options, range]);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'filterByName') {
      setFilters({ ...filters, [name]: value });
    } else {
      setEntries({ ...entries, [name]: value });
    }
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, entries],
    });
    setOptions(options.filter((e) => e !== entries.column));
  };

  return (
    <form>
      <label htmlFor="name">
        FILTRO DE NOME
        <input
          id="name"
          type="text"
          data-testid="name-filter"
          name="filterByName"
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="select-column">
        CARACTERÍSTICA MARCANTE
        <select
          id="select-column"
          data-testid="column-filter"
          name="column"
          onChange={ handleChange }
        >
          {options.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
      </label>

      <label htmlFor="select-range">
        CARACTERÍSTICA MARCANTE
        <select
          id="select-range"
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          {range.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
      </label>

      <label htmlFor="number">
        COLOQUE UM NÚMERO AQUI
        <input
          id="number"
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ handleChange }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        CLIQUE AQUI PARA FILTRAR
      </button>
    </form>
  );
}

export default Filter;
