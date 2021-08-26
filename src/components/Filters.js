import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const [selectValues, setSelectValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const comparisons = ['maior que', 'menor que', 'igual a'];

  const handleChangeName = ({ target: { value } }) => {
    setFilters({ ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const handleChange = ({ target: { value, name } }) => {
    setSelectValues({ ...selectValues, [name]: value });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, selectValues],
    });
  };

  const columnOptions = () => {
    let columns = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    if (filterByNumericValues) {
      filterByNumericValues.forEach(({ column }) => {
        columns = columns.filter((option) => option !== column);
      });
    }

    return columns;
  };

  return (
    <div>
      <label htmlFor="name">
        Filter
        <input
          placeholder="Planet name"
          type="text"
          data-testid="name-filter"
          onChange={ handleChangeName }
        />
      </label>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleChange }
      >
        { columnOptions().map((column, index) => (
          <option
            key={ index }
            value={ column }
          >
            { column }
          </option>
        )) }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        { comparisons.map((comparison) => (
          <option
            key={ comparison }
            value={ comparison }
          >
            { comparison }
          </option>
        )) }
      </select>
      <input
        name="value"
        placeholder="type a valor"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        filtrar
      </button>
    </div>
  );
};
export default Filters;
