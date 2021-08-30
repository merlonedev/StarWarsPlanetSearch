import React, { useState, useContext } from 'react';

import MyContext from '../context/MyContext';

function Form() {
  const [form, setForm] = useState({ column: '', comparison: '', value: 0 });
  const { filters, setFilters } = useContext(MyContext);

  function handleFilter({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  function clickToFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, form],
    });
  }

  return (
    <div>
      <form action="">
        <select
          value={ form.column }
          onChange={ (e) => handleFilter(e) }
          name="column"
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          value={ form.comparison }
          onChange={ (e) => handleFilter(e) }
          name="comparison"
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="num">
          <input
            value={ form.value }
            onChange={ (e) => handleFilter(e) }
            name="value"
            data-testid="value-filter"
            type="number"
            id="num"
          />
        </label>
        <button
          onClick={ clickToFilter }
          data-testid="button-filter"
          type="button"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default Form;
