import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

export default function FilterByName() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const sendFilterByName = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: { name: target.value } });
  };

  return (

    <label htmlFor="filterByName">
      Filter by Name
      {' '}
      <input
        type="text"
        name="filterByName"
        onChange={ sendFilterByName }
        data-testid="name-filter"
      />
    </label>

  );
}
