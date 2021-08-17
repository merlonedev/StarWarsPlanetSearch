import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Context';

export default function Filter() {
  const [search, setSearch] = useState('');
  const { setFilterByName, filters: { filterByName } } = useContext(AppContext);
  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  useEffect(() => {
    setFilterByName(search);
  }, [search, setFilterByName]);

  return (
    <label htmlFor="name">
      <input
        type="text"
        value={ filterByName }
        name="name"
        id="name"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </label>
  );
}
