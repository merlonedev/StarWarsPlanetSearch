import React, { useContext } from 'react';
import Context from '../context';

function FilterByName() {
  const { handleFilterByName } = useContext(Context);

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
          onChange={ (e) => handleFilterByName(e) }
        />
      </label>
    </div>
  );
}

export default FilterByName;
