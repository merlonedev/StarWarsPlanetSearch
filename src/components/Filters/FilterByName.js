import React, { useContext } from 'react';
import Context from '../../context/Context';

const FilterByName = () => {
  const { filters: { filterByName: { name } }, setName } = useContext(Context);

  return (
    <div>
      <label htmlFor="name-input">
        Filter by Name
        <input
          className="name-input"
          id="name-input"
          value={ name }
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setName(value) }
          placeholder="Name"
        />
      </label>
    </div>
  );
};

export default FilterByName;
