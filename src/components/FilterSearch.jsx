import React, { useContext } from 'react';
import Context from '../context/Context';

export default function FilterSearch() {
  const { name, filterPlanets } = useContext(Context);

  return (
    <div>
      <label htmlFor="filter">
        Filter Planet:
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ filterPlanets }
        />
      </label>
    </div>
  );
}
