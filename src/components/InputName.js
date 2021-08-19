import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function InputName() {
  const { filterName } = useContext(StarContext);

  return (
    <label htmlFor="filter-name">
      Planeta:
      <input
        type="text"
        id="filter-name"
        data-testid="name-filter"
        onChange={ filterName }
      />
    </label>
  );
}

export default InputName;
