import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterBar() {
  const { filters, setFilters } = useContext(AppContext);

  const handlechange = ({ target: { name, value } }) => {
    if (name === 'name') setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <label htmlFor="name-filter">
      Nome do Planeta
      <input
        data-testid="name-filter"
        id="name-filter"
        name="name"
        onChange={ handlechange }
        type="text"
      />
    </label>
  );
}

export default FilterBar;
