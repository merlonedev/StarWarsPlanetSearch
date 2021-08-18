import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Header() {
  const { handleChangeName } = useContext(FilterContext);
  return (
    <header>
      <input
        type="text"
        placeholder="Digite um planeta"
        data-testid="name-filter"
        onChange={ handleChangeName }
      />
    </header>
  );
}

export default Header;
