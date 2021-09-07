import React, { useContext } from 'react';
import Context from '../context/Context';

export default function FilterName() {
  const { setNames } = useContext(Context);

  const filter = ({ target }) => {
    setNames(target.value);
  };
  return (
    <div className="filter-name">
      <label htmlFor="filter-name">
        <input
          type="text"
          id="filter-name"
          placeholder="Filter by name"
          data-testid="name-filter"
          onChange={ (e) => filter(e) }
        />
      </label>
    </div>
  );
}
