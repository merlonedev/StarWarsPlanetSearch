import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const NameFilter = () => {
  const { filters: { filterByName: { name } },
    handleNameChange } = useContext(StarWarsContext);
  return (
    <input data-testid="name-filter" value={ name } onChange={ handleNameChange } />
  );
};

export default NameFilter;
