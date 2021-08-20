import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { setNameSearch } = useContext(PlanetsContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setNameSearch(value) }
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Header;
