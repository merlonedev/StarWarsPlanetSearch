import React from 'react';
import FilterCards from './filters/FilterCards';
import Filters from './filters/Filters';
import logo from '../images/star-wars-logo-974.png';

function Header() {
  return (
    <header className="page-header">
      <div className="title-div">
        {/* <h1 className="title">Star Wars</h1> */}
        <img src={ logo } alt="Star Wars logo" className="title" />
        <h3 className="subtitle">Planet Search</h3>
      </div>
      <Filters />
      <FilterCards />
    </header>
  );
}

export default Header;
