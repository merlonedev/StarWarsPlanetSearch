import React, { useContext } from 'react';
import MyContext from './MyContext';

function Filter() {
  const { filters, setFilters, filterByName } = useContext(MyContext);

  function handleChange({ target: { value } }) {
    return setFilters({ ...filters, filterByName: { name: value } });
  }

  return (
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
  );
}

export default Filter;
