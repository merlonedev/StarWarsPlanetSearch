import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { handleSearch } = useContext(StarWarsContext);

  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleSearch } />
    </div>
  );
}

export default Filter;
