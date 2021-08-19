import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function Filters() {
  const { filter, setFilter } = useContext(MyContext);
  return (
    <form>
      <label htmlFor="filterInput">
        <input
          data-testid="name-filter"
          id="filterInput"
          type="text"
          onChange={ (e) => setFilter(e.target.value) }
          value={ filter }
          placeholder="Procure por um planeta"
        />
      </label>
    </form>
  );
}

export default Filters;
