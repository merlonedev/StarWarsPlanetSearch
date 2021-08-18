import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function FilterByName() {
  const { handleChange } = useContext(PlanetContext);
  return (
    <div>
      <label htmlFor="filterName">
        <input
          type="text"
          placeholder="Filtre por Nome"
          id="filterName"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default FilterByName;
