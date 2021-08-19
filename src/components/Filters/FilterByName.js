import React, { useContext } from 'react';
import Context from '../../context/Context';

const FilterByName = () => {
  const { filters: { filterByName: { name } }, setName } = useContext(Context);

  return (
    <div>
      <input
        value={ name }
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setName(value) }
        placeholder="Filter by Name"
      />
    </div>
  );
};

export default FilterByName;
