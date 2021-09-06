import React, { useContext } from 'react';
import Context from '../context';

function FilterByName() {
  const { setPlanetName } = useContext(Context);

  const filterName = ({ target }) => {
    setPlanetName(target.value);
  };

  return (
    <div>
      <label
        htmlFor="name-id"
      >
        Filter by Name
        <input
          type="text"
          id="name-id"
          placeholder="Name"
          data-testid="name-filter"
          onChange={ (e) => filterName(e) }
        />
      </label>
    </div>
  );
}

export default FilterByName;
