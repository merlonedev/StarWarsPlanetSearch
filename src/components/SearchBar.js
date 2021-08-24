import React, { useContext } from 'react';
import Context from '../context/Context';

export default function SearchBar() {
  const { setFilters } = useContext(Context);

  const handleChange = (event) => {
    const { value } = event.target;
    const filters = { filterByName: { name: value } };
    setFilters(filters);
  };

  return (
    <div>
      <input type="text" onChange={ handleChange } data-testid="name-filter" />
    </div>
  );
}
