import React, { useContext } from 'react';
import Context from '../context/context';

function Header() {
  const { setFilterName } = useContext(Context);

  const handleChange = ({ target: { value } }) => {
    setFilterName(value);
  };

  return (
    <header>
      <h1>Star Wars Search Planets</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </header>
  );
}

export default Header;
