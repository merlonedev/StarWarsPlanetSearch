import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByName() {
  const { setInputName } = useContext(PlanetContext);

  const handleChange = ({ target }) => {
    setInputName(target.value);
  };

  return (
    <form>
      <label htmlFor="input-name">
        Pesquisar Planeta por Nome:
        <input
          type="text"
          name="name"
          id="input-name"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default FilterByName;
