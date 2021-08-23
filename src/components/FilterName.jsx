import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterName() {
  const { setFilterByName } = useContext(MyContext);
  function handleChange({ target }) {
    const { value } = target;
    setFilterByName(value.toUpperCase());
  }
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        id="name"
        onChange={ handleChange }
      />
    </div>
  );
}

export default FilterName;
