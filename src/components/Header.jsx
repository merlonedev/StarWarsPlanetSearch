import React from 'react';
import FilterText from './FilterText';

function Header() {
  return (
    <header className="headerApp">
      <h1>Planets Search</h1>
      <FilterText />
      <br />
    </header>
  );
}

export default Header;
