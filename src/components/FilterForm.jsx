import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function FilterForm() {
  const { filters, setFilter } = useContext(AppContext);
  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filters: { filterByName: { name: value.toLowerCase() } },
    });
    console.log(filters);
  };

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}
