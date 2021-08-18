import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterBar() {
  const { filters, setFilters } = useContext(AppContext);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <label htmlFor="name-filter">
      Nome
      <input
        data-testid="name-filter"
        id="name-filter"
        name="name"
        onChange={ handleChange }
        type="text"
      />
    </label>
  );
}

export default FilterBar;
