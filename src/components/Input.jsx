import React, { useContext } from 'react';
import Context from '../context/Context';

function Input() {
  const { filters, handlerChange } = useContext(Context);
  const value = filters.filterByName.name;
  return (
    <label htmlFor="search">
      <input
        type="text"
        id="search"
        onChange={ handlerChange }
        value={ value }
        data-testid="name-filter"
      />
    </label>
  );
}

export default Input;
