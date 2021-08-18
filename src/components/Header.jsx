import React from 'react';
import FilterCards from './filters/FilterCards';
import Filters from './filters/Filters';

function Header() {
  return (
    <header className="page-header">
      <div className="title-div">
        <h1 className="title">Star Wars</h1>
        <h3 className="title">Planet Search</h3>
      </div>
      <Filters />
      <FilterCards />
    </header>
  );
}

export default Header;
