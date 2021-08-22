import React, { useContext } from 'react';
import Context from '../context/Context';

export default function FilterName() {
  const { name, filterNamePlanets } = useContext(Context);

  return (
    <div>
      <label className="input-group-text" htmlFor="filter">
        Filter Search:
        {' '}
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ filterNamePlanets }
        />
      </label>
    </div>
  );
}
