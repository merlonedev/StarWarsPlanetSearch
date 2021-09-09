import React, { useContext } from 'react';
import Context from '../context/Context';

export default function FilterName() {
  const { handleFilterByName } = useContext(Context);

  return (
    <div className="filter-name">
      <label htmlFor="filter-name">
        Filter Name
        <input
          type="text"
          id="filter-name"
          placeholder="Filter by name"
          data-testid="name-filter"
          onChange={ (e) => handleFilterByName(e) }
        />
      </label>
    </div>
  );
}
