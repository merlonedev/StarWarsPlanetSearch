import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NameFilter() {
  const { setInputName } = useContext(StarWarsContext);

  const handleChangeName = ({ target }) => {
    setInputName(target.value);
  };

  return (
    <form>
      <label htmlFor="nameFilter">
        Filter by name:
        <input
          id="nameFilter"
          type="text"
          onChange={ (event) => handleChangeName(event) }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default NameFilter;
