import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchForm() {
  const { filterName } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    filterName(target.value);
  };

  return (
    <form>
      <input
        type="text"
        onChange={ (event) => handleChange(event) }
        data-testid="name-filter"
      />
    </form>
  );
}

export default SearchForm;
