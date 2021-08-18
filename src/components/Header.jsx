import React from 'react';
import FilterNumeric from './FilterNumeric';
import FilterText from './FilterText';

function Header() {
  return (
    <header className="headerApp">
      <h1>Planets Search</h1>
      <FilterText />
      <br />
      <FilterNumeric />
      <br />
    </header>
  );
}

export default Header;
