import React from 'react';

const FilterByName = () => (
  <div>
    <label htmlFor="filterName">
      <input
        type="text"
        placeholder="Filtre por Nome"
        id="filterName"
        data-testid="name-filter"
      />
    </label>
  </div>
);

export default FilterByName;
