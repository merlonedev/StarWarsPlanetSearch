import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const { filterPlanetByName } = useContext(AppContext);
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const handleChange = ({ target }) => {
    filterPlanetByName(target.value);
  };

  return (
    <form onSubmit={ submitHandler }>
      <input
        type="text"
        onChange={ handleChange }
        placeholder="Filtrar por planetas"
        data-testid="name-filter"
      />
    </form>
  );
}

export default Filters;
