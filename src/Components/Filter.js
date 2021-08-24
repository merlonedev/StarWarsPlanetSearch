import React, { useContext } from 'react';
import MyContext from './MyContext';

function Filter() {
  const { filters, setFilters, filterByName } = useContext(MyContext);

  function handleChange({ target: { value } }) {
    return setFilters({ ...filters, filterByName: { name: value } });
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
        <select name="column-filter" id="column-filter" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
    </form>
  );
}

export default Filter;
