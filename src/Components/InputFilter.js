import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputFilter() {
  const { handleFilter } = useContext(MyContext);
  return (
    <form>
      <label htmlFor="name-filter">
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (event) => handleFilter(event) }
        />
        Filtre aqui
      </label>
    </form>
  );
}
export default InputFilter;
