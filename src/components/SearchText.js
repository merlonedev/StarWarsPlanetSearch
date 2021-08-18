import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchText = () => {
  const { filterName } = useContext(StarWarsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Digite um nome"
        onChange={ filterName }
      />
    </div>
  );
};

export default SearchText;
