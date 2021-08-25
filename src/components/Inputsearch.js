import React, { useContext } from 'react';
import mycontext from '../context/mycontext';

function Inputsearch() {
  const { searchPlanet, nameplanet } = useContext(mycontext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="search"
      id="search"
      name="search"
      onChange={ searchPlanet }
      value={ nameplanet }
    />

  );
}

export default Inputsearch;
