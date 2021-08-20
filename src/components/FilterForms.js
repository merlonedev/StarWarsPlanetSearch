import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/Context';

function FilterForms() {
  const [filters, setFilters] = useState({
    filters: {
      filterByName: { name: '' },
    } });

  const { filters: { filterByName: { name: nameValue } } } = filters;

  const consumer = useContext(MyContext);
  const { setFiltersProvider } = consumer;

  const handleChange = ({ target: { id, value, name } }) => {
    setFilters({
      filters: {
        [id]: {
          [name]: value,
        },
      } });
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
          onChange={ handleChange }
          id="filterByName"
          name="name"
          placeholder="Nome do planeta"
        />
      </label>
    </form>
  );
}

export default FilterForms;
