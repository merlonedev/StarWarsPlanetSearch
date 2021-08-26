import React, { useContext, useState } from 'react';
import MyContext from './MyContext';

function Filter() {
  const { filters,
    setFilters,
    filterByName,
    filterByNumericValue,
    setFilterByNumericValue } = useContext(MyContext);

  function handleChange({ target: { value } }) {
    return setFilters({ ...filters, filterByName: { name: value } });
  }

  function handleFilter({ target: { name, value } }) {
    return setFilterByNumericValue({
      ...filterByNumericValue, [name]: value });
  }

  const [select, setSelect] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  function handleOption() {
    const newSelect = select.filter((option) => option !== filterByNumericValue.column);
    setSelect([...newSelect]);
  }

  function handleForm() {
    handleOption();
    return setFilters(
      { ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, filterByNumericValue] },
    );
  }

  return (
    <form>
      <label htmlFor="filterByName">
        <input
          type="text"
          name="filterByName"
          id="filterByName"
          value={ filterByName.name }
          onChange={ handleChange }
          data-testid="name-filter"
          placeholder="Pesquise aqui"
        />
      </label>
      <label htmlFor="column-filter">
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          onChange={ handleFilter }
        >
          {
            select.map((option) => (
              <option value={ option } key={ option }>
                {option}
              </option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ handleFilter }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          name="value"
          value={ filterByNumericValue.value }
          id="value-filter"
          data-testid="value-filter"
          placeholder="Número"
          min="0"
          onChange={ handleFilter }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleForm }>
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
