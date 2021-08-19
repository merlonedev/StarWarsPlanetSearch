import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Search() {
  const { handleSetName } = useContext(planetsContext);

  const filterByName = ({ target }) => {
    const { value } = target;
    handleSetName(value);
  };

  return (
    <input
      data-testid="name-filter"
      placeholder="Pesquise aqui"
      onChange={ filterByName }
    />
  );
}

export default Search;
