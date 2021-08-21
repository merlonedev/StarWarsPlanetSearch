import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchFilters() {
  const { setFilters } = useContext(StarWarsContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({ filterByName: { name: value } });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
          placeholder="Digite o nome que deseja filtrar"
        />
      </form>
    </div>
  );
}

export default SearchFilters;
