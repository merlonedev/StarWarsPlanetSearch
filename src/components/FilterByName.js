import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function FilterByName() {
  const { filters, setFilters } = useContext(Context);
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
