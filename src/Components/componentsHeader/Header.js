import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';

function Header() {
  const { filters, setFilters } = useContext(MyContext);

  return (
    <header>
      <h1> Star Wars Planets </h1>
      <div>
        <label htmlFor="filterByName">
          Filter By Name:
          <input
            id="filterByName"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => setFilters({
              ...filters,
              filterByName: {
                name: value,
              },
            }) }
          />
        </label>
      </div>
    </header>
  );
}
export default Header;
