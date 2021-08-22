import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function NameFilter() {
  const { name, setName } = useContext(MyContext);

  function handleChange({ target }) {
    setName(target.value);
  }

  return (
    <div>
      <label htmlFor="name">
        Filter by name
        <input
          data-testid="name-filter"
          type="text"
          name="filter-by-name"
          onChange={ handleChange }
          value={ name }
        />
      </label>
    </div>
  );
}

export default NameFilter;
